var PIXI = require("pixi.js");

//init sprite
const textures = [];
textures.push(PIXI.Texture.from("794c78eb87530ed31644b9c2caeb226d.png"));
textures.push(PIXI.Texture.from("365d4de6c99d71f1370f7c5e636728af.svg"));
textures.push(PIXI.Texture.from("2daca5f43efc2d29fb089879448142e9.svg"));
textures.push(PIXI.Texture.from("5456a723f3b35eaa946b974a59888793.svg"));

const sprite = new PIXI.Sprite(textures[0]);

global.events.on("greenFlag", function() {
    global.app.stage.addChild(sprite);
    sprite.texture = textures[0];
    sprite.scale.set(0.5);
});