/*
//imports
var PIXI = require("pixi.js");
var EventEmitter = require("events").EventEmitter;

//extensions
var Motion = require("../../sparx-extension/Motion/index.js");

//init vars and lists
var var_test = 114514;
var list_test = [19, 19, 810];

//init events
var event = new EventEmitter();

//init pixi
var app = new PIXI.Application({ width: 960, height: 720, backgroundColor: 0xf0ffff });
document.body.appendChild(app.view);
app.stage.sortableChildren = true;

//init stage
const stage_textures = [];
stage_textures.push({ "背景1": PIXI.Texture.from("797b03bdb8cf6ccfc30c0692d533d998.png") });
const stage_textures_names = ["背景1"];
var stage_textures_index = 0;
const stage_sprite = new PIXI.Sprite(textures[0]);
stage_sprite.anchor.set(0.5, 0.5);

//init sprite1
const sprite1_textures = [];
sprite1_textures.push({ "tera-a": PIXI.Texture.from("794c78eb87530ed31644b9c2caeb226d.png") });
sprite1_textures.push({ "tera-b": PIXI.Texture.from("365d4de6c99d71f1370f7c5e636728af.svg") });
sprite1_textures.push({ "tera-c": PIXI.Texture.from("2daca5f43efc2d29fb089879448142e9.svg") });
sprite1_textures.push({ "tera-d": PIXI.Texture.from("5456a723f3b35eaa946b974a59888793.svg") });
const sprite1_textures_names = ["tera-a", "tera-b", "tera-c", "tera-d"];
var sprite1_textures_index = 1;
const sprite1_sprite = new PIXI.Sprite(textures[1]);
sprite1_sprite.scale.set(2);
sprite1_sprite.anchor.set(0.5, 0.5);

function hatBlock1() {
    app.stage.addChild(sprite1_sprite);
    sprite1_sprite.x = 480 //Motion.scratchPosToCanvas(0, 0).x;
    sprite1_sprite.y = 360 //Motion.scratchPosToCanvas(0, 0).y;
    Motion.motion_turnright(sprite, 45);
    Motion.motion_movesteps(sprite, 1);
}

event.on("greenFlag", hatBlock1);

function hatBlock2() {
    app.stage.addChild(stage_sprite);
    stage_sprite.texture = stage_textures[0];
    stage_textures_index = 0;
    event.emit("消息1");
}

event.on("greenFlag", hatBlock2);

function hatBlock3() {
    var_test += 1;
    sprite1_sprite.texture = sprite1_textures[2];
    sprite1_textures_index = 2;
    sprite1_textures_names[sprite1_textures_index];//获取造型名称
}

event.on("消息1", hatBlock3);

//clicked green flag
event.emit("greenFlag");*/

//imports
const canvas = document.getElementById("scratch-stage");
var ScratchRender = require("../scratch-render/RenderWebGL.js");
var renderer = ScratchRender(canvas);
renderer.setLayerGroupOrdering(['group1']);
var sprite1 = renderer.createDrawable('group1');
var img = new Image();
img.src = "./794c78eb87530ed31644b9c2caeb226d.png";
img.onload = function() {
    var costume1 = renderer.createBitmapSkin(img, 2, [97, 126]);
    renderer.updateDrawableSkinId(sprite1, costume1);
};
