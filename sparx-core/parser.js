import testData from "./test.js";



/**
 * 
 * @param {Object} projectJson 
 */
export function parse(projectJson) {
    var parseObject = {};
    for (let target of projectJson["targets"]) {
        if (target["isStage"]) {
            parseObject["stage"] = {};
            let blocks = target["blocks"];
            for (let block of blocks.values()) {
                if (block["parent"] === null) {
                    let codeBlock = [];
                    let currentBlock = block;
                    while (currentBlock["next"] !== null) {
                        let blockInputs = [];

                        codeBlock.push({ opcode: currentBlock["opcode"], inputs: currentBlock["inputs"] });
                        let currentBlock = block["next"];
                    }
                }
            }
        }
    }
}

var parseObject = {};

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
 * 
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
            return typeof value == "string";
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
            return typeof value == "string";
        case 11:
            return typeof value == "string";
        case 12:
            return typeof value == "string";
        case 13:
            return typeof value == "string";
    }
}

/**
 * 
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
                    genInputs[key] = "var_" + inputBlock[1];
                }
                else if (inputBlock[0] == 13) {
                    genInputs[key] = "list_" + inputBlock[1];
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

function unitTests(func) {
    if (func == findHatBlocks) {
        console.log(func(testData.targets[0].blocks));
    }
    else if (func == typeCheck) {
        //
    }
}

console.log("%j", generateBlocksCode(testData.targets[0].blocks, ":LT)|s-fO0A7W!4;@dvQ"));