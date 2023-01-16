//TODO: 1.JIT编译器（直接编译成JavaScript, 其中使用率高、只有数字运算的热点自定义积木编译成WebAssembly(walt)。）

//JSAOTCompiler
//JITCompiler
//AOT & JIT Compiler

//Just a template, working in progress, plz waiting for it done.

//import { compile } from "walt-compiler";
//unused
import { jsCode } from "./code.js";
import { testData3 } from "./test.js";

var genCode = "";

export function compile() {
    var code = `
<body>
    <canvas id="scratch-stage" width="10" height="10"></canvas>
    <script src="./scratch-render.js"></script>
    <script>
        const canvas = document.getElementById("scratch-stage");
        const drawStep = function () {
            renderer.draw();
            requestAnimationFrame(drawStep);
        };
        var renderer = new ScratchRender(canvas);
        renderer.setLayerGroupOrdering(['group1']);
        var sprite1 = renderer.createDrawable('group1');
        var img = new Image();
        img.src = "./794c78eb87530ed31644b9c2caeb226d.png";
        var costume1;
        img.onload = function () {
            costume1 = renderer.createBitmapSkin(img, 2, [97, 126]);
        };
        var xhr = new XMLHttpRequest();
        xhr.open('GET', './2daca5f43efc2d29fb089879448142e9.svg');
        xhr.send();
        var costume2;
        xhr.onload = function() {
            costume2 = renderer.createSVGSkin(xhr.responseText, [49, 63]);
        };
        function start() {
            renderer.updateDrawableSkinId(sprite1, costume1);
            //renderer.updateDrawableSkinId(sprite1, costume2);
        }
        setTimeout(start, 1000);
        var sprite3 = renderer.createDrawable('group1');
        var textBubble = renderer.createTextSkin("say", "Hello scratch-render!!!", false);
        renderer.updateDrawableSkinId(sprite3, textBubble);
        drawStep();
    </script>
</body>`
}

function generateScript() {

}

function generateSprite() {

}

function generateStage(stage) {
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
    list += "var costumes = {";
    i = 0;
    for (let costume of stage["costumes"]) {
        i++;
        code += genCostume("stage", i, costume["md5ext"], costume["bitmapResolution"], costume["rotationCenterX"], costume["rotationCenterY"], costume["dataFormat"]);
        list += `"${costume["name"]}": stage_costume${i}`;
        if (i != stage["costumes"].length) {
            list += ", ";
        }
    }
    list += "};";
    code += list + "\n";
    code += genRenderer();
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

/**
 * 
 * @param {string} sprite 
 * @param {string} name 
 * @returns {string}
 */
function genBroadcast(sprite, name) {
    return `new CustomEvent("${name}");\n`;
}

/**
 * 
 * @param {string} sprite 
 * @param {object} list 
 * @returns {string}
 */
function genBroadcastsList(sprite, list) {
    return `var broadcasts = ${JSON.stringify(list)};\n`;
}

function genRenderer() {
    return `
const canvas = document.getElementById("scratch-stage");
var renderer = new ScratchRender(canvas);
const drawStep = function () {
    renderer.draw();
    requestAnimationFrame(drawStep);
};\n`;
}

/**
 * @todo
 * @param {} index 
 * @returns 
 */
function genSprite(index) {
    return `var sprite${index} = renderer.createDrawable('layer${index}');\n`;
}

/**
 * 
 * @param {string} sprite e.g.: stage / sprite1 / sprite2
 * @param {number} index 
 * @param {string} name 
 * @param {string} asset 
 * @param {number} bitmapRsl 
 * @param {number} rcx 
 * @param {number} rcy 
 * @param {string} dataFmt 
 */
function genCostume(sprite, index, asset, bitmapRsl, rcx, rcy, dataFmt) {
    if(dataFmt == "svg") {
        return `        
var xhr = new XMLHttpRequest();
xhr.open('GET', './${asset}');
xhr.send();
var ${sprite}_costume${index};
xhr.onload = function() {
    ${sprite}_costume${index} = renderer.createSVGSkin(xhr.responseText, [${rcx}, ${rcy}]);
};\n`
    }
    else if(dataFmt == "png") {
        return `        
var img = new Image();
img.src = "./${asset}";
var ${sprite}_costume${index};
img.onload = function () {
    ${sprite}_costume${index} = renderer.createBitmapSkin(img, ${bitmapRsl}, [${rcx}, ${rcy}]);
};\n`
    }
}

function Tests() {
    console.log(generateStage(testData3.Stage));
}

Tests();