//TODO: 1.JIT编译器（直接编译成JavaScript, 其中使用率高、只有数字运算的热点自定义积木编译成WebAssembly(walt)。）

//JSAOTCompiler
//JITCompiler
//AOT & JIT Compiler

//import { compile } from "walt-compiler";
//unused
//import { jsCode } from "./code.js";
import { testData3 } from "./test.js";

var genCode = "";

export function compile(obj) {
    var stage_key;
    for (let key of Object.keys(obj)) {
        if (obj[key]["isStage"]) {
            stage_key = key;
        }
    }
    var code = `
<body>
    <canvas id="scratch-stage" width="10" height="10"></canvas>
    <script src="./scratch-render.js"></script>
    <script>
        ${generateStage(obj, obj[stage_key], stage_key)}
        ${generateSprites(obj)}
        ${genLoadFunction(obj)}
        ${genTimeout()}
    </script>
</body>`;
    return code;
}

function generateScript(blocks) {
    
}

function genLoadFunction(obj) {
    var update_skin = "";
    var code = "";
    var costumes_obj = "costumes = {";
    code += "_load_function = function() {\n";
    let i = 0;
    let k = 0;
    for (let key of Object.keys(obj)) {
        if (key == "monitors" || key == "extensions") {
            continue;
        }
        else if (obj[key]["isStage"]) {
            i++;
            costumes_obj += `"${key}": {`;
            for (let j = 0; j < obj[key]["costumes"].length; j++) {
                costumes_obj += `"${obj[key]["costumes"][j]["name"]}": stage_costume${j + 1}`;
                if (j != obj[key]["costumes"].length - 1) {
                    costumes_obj += ", ";
                }
            }
            costumes_obj += "}";
            update_skin += `    renderer.updateDrawableSkinId(stage, costumes["${key}"]["${obj[key]["costumes"][obj[key]["currentCostume"]]["name"]}"]);\n`;
        }
        else {
            k++;
            i++;
            costumes_obj += `"${key}": {`;
            for (let j = 0; j < obj[key]["costumes"].length; j++) {
                costumes_obj += `"${obj[key]["costumes"][j]["name"]}": sprite${k}_costume${j + 1}`;
                if (j != obj[key]["costumes"].length - 1) {
                    costumes_obj += ", ";
                }
            }
            costumes_obj += "}";
            update_skin += `    renderer.updateDrawableSkinId(sprites["${key}"], costumes["${key}"]["${obj[key]["costumes"][obj[key]["currentCostume"]]["name"]}"]);\n`;
        }
        if (i != Object.keys(obj).length - 2) {
            costumes_obj += ", ";
        }
    }
    costumes_obj += "};\n";
    code += costumes_obj;
    code += update_skin;
    code += "    drawStep();\n";
    code += "};\n";
    return code;
}

function generateSprites(obj) {
    var list = "var sprites = {";
    //var costumes_obj = "var costumes = {"
    var code = "";
    var i = 0;
    //var k = 0;
    for (let key of Object.keys(obj)) {
        if (obj[key]["isStage"] || key == "monitors" || key == "extensions") {
            /*
            if (obj[key]["isStage"]) {
                k++;
                costumes_obj += `"${key}": {`;
                for (let j = 0; j < obj[key]["costumes"].length; j++) {
                    costumes_obj += `"${obj[key]["costumes"][j]["name"]}": stage_costume${j + 1}`;
                    if (j != obj[key]["costumes"].length - 1) {
                        costumes_obj += ", ";
                    }
                }
                costumes_obj += "}";
            }
            */
           continue;
        }
        else {
            i++;
            //k++;
            code += generateSprite(obj[key], key, i);
            list += `"${key}": sprite${i}`;
            /*
            costumes_obj += `"${key}": {`;
            for (let j = 0; j < obj[key]["costumes"].length; j++) {
                costumes_obj += `"${obj[key]["costumes"][j]["name"]}": sprite${i}_costume${j + 1}`;
                if (j != obj[key]["costumes"].length - 1) {
                    costumes_obj += ", ";
                }
            }
            costumes_obj += "}";
            */
            if (i != Object.keys(obj).length - 3) {
                list += ", ";
            }
        }
        /*
        if (k != Object.keys(obj).length - 2) {
            costumes_obj += ", ";
        }
        */
    }
    //costumes_obj += "};";
    list += "};";
    code += list + "\n";
    //code += costumes_obj + "\n";
    return code;
}

function generateSprite(sprite, name, index) {
    var code = "";
    let i = 0;
    for (let costume of sprite["costumes"]) {
        i++;
        code += genCostume(`sprite${index}`, i, costume["md5ext"], costume["bitmapResolution"], costume["rotationCenterX"], costume["rotationCenterY"], costume["dataFormat"], costume["name"]);
    }
    code += genSprite(name, index);
    //code += genLoadSprite(sprite["costumes"], sprite["currentCostume"], name);
    return code;
}

function generateStage(obj, stage, name) {
    var code = "";
    let i = 0;
    let list = {};
    for (let key of Object.keys(stage["variables"])) {
        list[stage["variables"][key][0]] = stage["variables"][key][1];
    }
    code += genVar("stage", list);
    list = {};
    for (let key of Object.keys(stage["lists"])) {
        list[stage["lists"][key][0]] = stage["lists"][key][1];
    }
    code += genList("stage", list);
    list = "";
    list += "var broadcasts = {"
    i = 0;
    for (let key of Object.keys(stage["broadcasts"])) {
        i++;
        list += `"${stage["broadcasts"][key]}": new CustomEvent("${stage["broadcasts"][key]}")`;
        if (i != Object.keys(stage["broadcasts"]).length) {
            list += ", ";
        }
    }
    list += "};";
    code += list + "\n";
    list = "";
    i = 0;
    for (let costume of stage["costumes"]) {
        i++;
        code += genCostume("stage", i, costume["md5ext"], costume["bitmapResolution"], costume["rotationCenterX"], costume["rotationCenterY"], costume["dataFormat"], costume["name"]);
        /*
        list += `"${costume["name"]}": costume_${costume["name"]}`;
        if (i != stage["costumes"].length) {
            list += ", ";
        }
        */
    }
    //list += "};";
    //var name = Object.keys(obj)[Object.values(obj).indexOf(stage)];
    code += genRenderer(obj);
    code += genStage(name);
    //code += genLoad(stage["costumes"], stage["currentCostume"], name);
    //code += genTimeout();
    return code;
}

/**
 * @param {string} sprite
 * @param {object} obj
 * @returns {string}
 */
function genVar(sprite, obj) {
    return `var vars = ${JSON.stringify(obj)};\n`;
}

/**
 * 
 * @param {string} sprite 
 * @param {object} obj
 * @returns {string}
 */
function genList(sprite, obj) {
    return `var lists = ${JSON.stringify(obj)};\n`;
}

function genRenderer(targets) {
    let code = "";
    code += "[";
    for (let i = 0; i < Object.keys(targets).length - 2; i++) {
        code += `'layer${i}'`;
        if (i != Object.keys(targets).length - 3) {
            code += ", ";
        }
    }
    code += "]";
    return `
const canvas = document.getElementById("scratch-stage");
var renderer = new ScratchRender(canvas);
const drawStep = function () {
    renderer.draw();
    requestAnimationFrame(drawStep);
};
renderer.setLayerGroupOrdering(${code});
var costumes;\n`;
}

/**
 * @todo
 * @param {string} name
 * @param {number} index 
 * @returns 
 */
function genSprite(name, index) {
    return `var sprite${index} = renderer.createDrawable('layer${index}');\n`;
}

function genStage(name) {
    return `var stage = renderer.createDrawable('layer0');\n`;
}

/**
 * 
 * @param {string} sprite !deprecated
 * @param {number} index !deprecated
 * @param {string} name 
 * @param {string} asset 
 * @param {number} bitmapRsl 
 * @param {number} rcx 
 * @param {number} rcy 
 * @param {string} dataFmt 
 */
function genCostume(sprite, index, asset, bitmapRsl, rcx, rcy, dataFmt, name) {
    if (dataFmt == "svg") {
        return `        
var ${sprite}_xhr${index} = new XMLHttpRequest();
${sprite}_xhr${index}.open('GET', './${asset}');
${sprite}_xhr${index}.send();
var ${sprite}_costume${index};
${sprite}_xhr${index}.onload = function() {
    ${sprite}_costume${index} = renderer.createSVGSkin(${sprite}_xhr${index}.responseText, [${rcx}, ${rcy}]);
};\n`
    }
    else if (dataFmt == "png") {
        return `        
var ${sprite}_img${index} = new Image();
${sprite}_img${index}.src = "./${asset}";
var ${sprite}_costume${index};
${sprite}_img${index}.onload = function () {
    ${sprite}_costume${index} = renderer.createBitmapSkin(${sprite}_img${index}, ${bitmapRsl}, [${rcx}, ${rcy}]);
};\n`
    }
}

function genTimeout() {
    return `setTimeout(_load_function, 1000);\n`;
}

function genBlock(block) {
    let opcode = block["opcode"];
    let args = block["args"];
    switch (opcode) {
        case "event_whenflagclicked":
            return `window.addEventListener("greenFlag", function() {\n`;
        case "event_whenkeypressed":
            return `document.onkeypress = function (e) {\n`;
        case "event_whenstageclicked":
        /**@todo setInterval */
        case "event_whenthisspriteclicked":
        /** right above */
        case "event_whenbackdropswitchesto":
        /**@todo */
        case "event_whenbroadcastreceived":
    }
}

function Tests() {
    //console.log(generateStage(testData3, testData3.Stage));
    console.log(compile(testData3));
}

Tests();