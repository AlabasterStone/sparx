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
 * 生成从事件类积木链接的积木对象
 * @param {Object} blocks
 * @param {String} hatBlockKey 
 * @returns {Array} blocksCode
 */
function generateBlockCode(blocks, hatBlockKey) {
    blocks[hatBlockKey] = 
}

function unitTests(func) {
    if (func == findHatBlocks) {
        console.log(func(testData.targets[0].blocks));
    }
}

unitTests(findHatBlocks);