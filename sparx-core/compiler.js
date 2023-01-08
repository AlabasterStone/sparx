//TODO: 1.JIT编译器（直接编译成JavaScript, 其中使用率高、只有数字运算的热点自定义积木编译成WebAssembly(walt)。）

//JSAOTCompiler
//JITCompiler
//AOT & JIT Compiler

//Just a template, working in progress, plz waiting for it done.

import { compile } from "walt-compiler";
import { jsCode } from "./code";

var genCode = "";

function genImports() {
    genCode += jsCode.IMPORT_EVENT;
}

function genInitCode()

export function genJSCode(parseObject) {
    generateImports();
}

export function compileWASMHotspot(blockObject) {

}

function generateSpriteCode(spriteObject) {

}

function genStageCode(stageObject) {

}

function genWaltCode(blockObject) {

}