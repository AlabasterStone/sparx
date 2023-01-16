var PIXI = require("pixi.js");

const textures = [];
textures.push(PIXI.Texture.from("797b03bdb8cf6ccfc30c0692d533d998.png"));

const sprite = new PIXI.Sprite(textures[0]);

global.events.on("greenFlag", function() {
    global.app.stage.addChild(sprite);
    sprite.texture = textures[0];
});