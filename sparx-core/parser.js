/// MIT License
/// Copyright (c) 2022-2023 Zhang Shuning
///                         Sparx Project
/// Code by AlabasterStone
/// All Right Reserved.

//引入测试数据
/**************************************/
import testData from "./test.js";
import { testData2 } from "./test.js";
/**************************************/
//TODO: 1.解析变量和列表
//      2.解析广播
//      3.解析造型
//      4.解析声音
//      5.解析舞台上显示的变量和列表监视
//      6.解析扩展


/**
 * 解析project.json文件
 * @param {Object} projectJson 
 * @returns {Object} parseObject
 */
export default function parse(projectJson) {
    let parseObject = {};
    let stageObject = {
        "isStage": true,
        "variables": {},
        "lists": {},
        "broadcasts": {},
        "blocks": {},
        "comments": {},
        "currentCostume": 0,
        "costumes": [],
        "sounds": [],
        "volume": 100,
        "layerOrder": 0,
        "tempo": 60,
        "videoTransparency": 50,
        "videoState": "off",
        "textToSpeechLanguage": null
    };
    let spriteObject = {
        "isStage": false,
        "variables": {},
        "lists": {},
        "broadcasts": {},
        "blocks": {},
        "comments": {},
        "currentCostume": 0,
        "costumes": [],
        "sounds": [],
        "volume": 100,
        "layerOrder": 1,
        "visible": true,
        "x": 38,
        "y": 46,
        "size": 100,
        "direction": 90,
        "rotationStyle": "all around"
    };
    for (let target of projectJson.targets) {
        let parseTarget = parseObject[target.name];
        if (target.isStage) {
            parseTarget = stageObject;
            parseTarget.tempo = target.tempo;
            parseTarget.videoTransparency = target.videoTransparency;
            parseTarget.videoState = target.videoState;
            parseTarget.textToSpeechLanguage = target.textToSpeechLanguage;
        }
        else {
            parseTarget = spriteObject;
            parseTarget.visible = target.visible;
            parseTarget.x = target.x;
            parseTarget.y = target.y;
            parseTarget.size = target.size;
            parseTarget.direction = target.direction;
            parseTarget.rotationStyle = target.rotationStyle;
        }
        //生成代码
        let blocks = target.blocks;
        findHatBlocks(blocks).forEach((key) => parseTarget.blocks = generateBlocksCode(blocks, key));
        //生成变量和列表
        parseTarget.variables = target.variables;
        parseTarget.lists = target.lists;
        parseTarget.isStage = target.isStage;
        parseTarget.currentCostume = target.currentCostume;
        parseTarget.broadcasts = target.broadcasts;
        parseTarget.costumes = target.costumes;
        parseTarget.sounds = target.sounds;
        parseTarget.volume = target.volume;
        parseTarget.layerOrder = target.layerOrder;
        //赋值回去
        parseObject[target.name] = parseTarget;
    }
    parseObject.monitors = projectJson.monitors;
    return parseObject;
}

/**
 * 遍历查找事件类积木
 * @param {Object} blocks 
 * @returns {Array} hatBlocks
 */
function findHatBlocks(blocks) {
    let hatBlocks = [];
    for (let key in blocks) {
        let opcode = blocks[key]["opcode"];
        if (opcode !== undefined) {
            if (opcode.slice(0, 10) == "event_when" || opcode == "control_start_as_clone" || opcode == "procedures_definition") {
                hatBlocks.push(key);
            }
        }
    }
    return hatBlocks;
}

/**
 * 类型检查
 * @param {Number} typeCode 
 * @param {String} value 
 * @returns {Boolean} 类型是否正确
 */
function typeCheck(typeCode, value) {
    if (!isNaN(value)) value = Number(value);
    switch (typeCode) {
        case 1:
            return typeof value == "object" || typeof value == "string";
        case 2:
            return typeof value == "string" || value === null;
        case 3:
            return typeof value == "string" || value[0] == 12 || value[0] == 13;
        case 4:
            return typeof value == "number";
        case 5:
            return value > 0;
        case 6:
            return value > 0 && value % 1 == 0;
        case 7:
            return value > 0 && value % 1 == 0;
        case 8:
            return value > -180 && value <= 180;
        case 9:
            return value.length == 7 && value[0] == "#";
        case 10:
            return typeof value == "string" || typeof value == "number";
        case 11:
            return typeof value == "string";
        case 12:
            return typeof value == "string";
        case 13:
            return typeof value == "string";
    }
}

/**
 * 生成积木的输入对象
 * @param {Object} blocks 
 * @param {Object} inputs 
 * @returns {Object} 生成的输入对象
 */
function genBlockInputs(blocks, inputs) {
    let genInputs = {};
    for (let key of Object.keys(inputs)) {
        let currentInput = inputs[key];
        if (typeCheck(currentInput[0], currentInput[1])) {
            if (typeof currentInput[1] == "string") {
                genInputs[key] = parseBlock(blocks, currentInput[1]);
                continue;
            }
            let inputBlock = currentInput[1];
            if (typeCheck(inputBlock[0], inputBlock[1])) {
                if (inputBlock[0] == 2 || inputBlock[0] == 3) {
                    genInputs[key] = parseBlock(blocks, inputBlock[1]);
                }
                else if (inputBlock[0] >= 4 && inputBlock[0] <= 8) {
                    genInputs[key] = Number(inputBlock[1]);
                }
                else if (inputBlock[0] == 12) {
                    genInputs[key] = inputBlock[2];
                }
                else if (inputBlock[0] == 13) {
                    genInputs[key] = inputBlock[2];
                }
                else {
                    genInputs[key] = inputBlock[1];
                }
            }
            else {
                console.log(" " + inputBlock[0] + " " + inputBlock[1]);
                throw "input type error";
            }
        }
        else {
            console.log(key + " " + currentInput[0] + " " + currentInput[1]);
            throw "input type error";
        }
    }
    return genInputs;
}

/**
 * 解析积木
 * @param {Object} blocks
 * @param {String} blockKey
 * @returns {Object} blockCode
 */
function parseBlock(blocks, blockKey) {
    let block = blocks[blockKey];
    let blockFields = block["fields"];
    let fields = [];
    Object.keys(blockFields).forEach((key) => fields.push({ [key]: blockFields[key][0] }));
    let blockInputs = block["inputs"];
    let blockArgs = { fields: fields, inputs: genBlockInputs(blocks, blockInputs) };
    return { opcode: block["opcode"], args: blockArgs };
}

/**
 * 生成从事件类积木链接的积木对象
 * @param {Object} blocks
 * @param {String} hatBlockKey 
 * @returns {Array} blocksCode
 */
function generateBlocksCode(blocks, hatBlockKey) {
    let blockCode = [];
    let currentBlockKey = hatBlockKey;
    while (blocks[currentBlockKey]["next"] !== null) {
        blockCode.push(parseBlock(blocks, currentBlockKey));
        currentBlockKey = blocks[currentBlockKey]["next"];
    }
    return blockCode;
}

//单元测试
function unitTests(func) {
    if (func == findHatBlocks) {
        console.log(func(testData.targets[0].blocks));
    }
    else if (func == typeCheck) {
        //
    }
}

/*测试一下啊啊啊*/
//console.log("%j", generateBlocksCode(testData2.targets[1].blocks, "{FrIh3E-rGz/0)J}Ay]~"));
console.log("%j", parse(testData2));