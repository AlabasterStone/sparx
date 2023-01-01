//import * as PIXI from "pixi.js";

//TODO: 编译时检查数据类型
//SAE-json.md

/**
 * @description 转换scratch到canvas坐标系
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Object}
 */
function scratchPosToCanvas(x, y) {
    let canvas_x = window.innerWidth + x;
    let canvas_y = window.innerHeight + y;
    return { x: canvas_x, y: canvas_y };
}

/**
 * @description 转换canvas到scratch坐标系
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Object}
 */
function canvasPosToScratch(x, y) {
    let scratch_x = x - window.innerHeight;
    let scratch_y = y - window.innerHeight;
    return { x: scratch_x, y: scratch_y };
}

/**
 * @description 转换scratch到canvas角度
 * @param {Number} angle
 * @returns {Number}
 */
function scratchAngleToCanvas(angle) {
    return angle - 90;
}

/**
 * @description 转换canvas到scratch角度
 * @param {Number} angle
 * @returns {Number}
 */
function canvasAngleToScratch(angle) {
    return angle + 90;
}

/**
 * @function motion_movesteps
 * @param {PIXI.Sprite} sprite
 * @param {Number} steps
 * @returns {PIXI.Sprite}
 */
function motion_movesteps(sprite, steps) {
    //用三角函数算出坐标偏移
    //sin(A) = y/z
    //cos(A) = x/z
    //1 angle = pi/180 rad
    let offset_x = Math.sin(canvasAngleToScratch(sprite.angle) * Math.PI / 180) * steps;
    let offset_y = Math.cos(canvasAngleToScratch(sprite.angle) * Math.PI / 180) * steps;
    sprite.x += offset_x;
    sprite.y += offset_y;
    return sprite;
}

/**
 * @function motion_turnright
 * @param {PIXI.Sprite} sprite
 * @param {Number} degree
 * @returns {PIXI.Sprite}
 */
function motion_turnright(sprite, degree) {
    sprite.angle += scratchAngleToCanvas(degree);
    return sprite;
}

/**
 * @function motion_turnleft
 * @param {PIXI.Sprite} sprite
 * @param {Number} degree
 * @returns {PIXI.Sprite}
 */
function motion_turnleft(sprite, degree) {
    sprite.angle -= scratchAngleToCanvas(degree);
    return sprite;
}
/*
var homo = PIXI.Sprite.from("test.svg");
function print(s) {
    console.log(homo);
}

import { compile } from "walt-compiler";
const buffer = compile(`
import { motion_print: PrintType } from 'env';

type PrintType = (i32) => void;
export function echo(): void {
  motion_print(1919810);
}`).buffer();
WebAssembly.instantiate(buffer, { env: { motion_print: print } }).then(result => result.instance.exports.echo());
const create_sprite = (path) => {var new_sprite = PIXI.Sprite.from(path);};
const move_sprite = (x, y) => new_sprite.position.set(x, y);
*/

import { compile } from "walt-compiler";
var memory = new WebAssembly.Memory({ initial: 1 });
function walt_log(string) {
    console.log(string);
}

const buffer2 = compile(`
import { walt_log: PrintType } from 'env';
const memory: Memory<{ initial: 1 }>;
type PrintType = (i32[]) => void;
export function echo(): void {
  walt_log("helloworld");
}`).buffer();

WebAssembly.instantiate(buffer2, { env: { walt_log: walt_log } }).then(result => result.instance.exports.echo());