var PIXI = require("pixi.js");

//init sprite
const textures = [];
textures.push(PIXI.Texture.from("794c78eb87530ed31644b9c2caeb226d.png"));
textures.push(PIXI.Texture.from("365d4de6c99d71f1370f7c5e636728af.svg"));
textures.push(PIXI.Texture.from("2daca5f43efc2d29fb089879448142e9.svg"));
textures.push(PIXI.Texture.from("5456a723f3b35eaa946b974a59888793.svg"));



var motion = require("../../sparx-extension/Motion/index.js");
const sprite = new PIXI.Sprite(textures[0]);

var img = new Image();
img.src = "./794c78eb87530ed31644b9c2caeb226d.png";

img.onload = function() {
    sprite.anchor.set(97 / sprite.width, 126 / sprite.height);
};

global.events.on("greenFlag", function() {
    global.app.stage.addChild(sprite);
    sprite.x = motion.scratchPosToCanvas(0, 0).x;
    sprite.y = motion.scratchPosToCanvas(0, 0).y;
    console.log(sprite.anchor);
    //motion.motion_turnright(sprite, 45);
    //motion.motion_movesteps(sprite, 1);
});