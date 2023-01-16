var PIXI = require("pixi.js");
var EventEmitter = require("events").EventEmitter;

//init app
global.app = new PIXI.Application({ width: 1440, height: 900, backgroundColor: 0xf0ffff });
document.body.appendChild(global.app.view);
global.app.stage.sortableChildren = true;

//init EventEmitter
global.events = new EventEmitter();

//init vars
global.testvar = 114514;

var stage = require("./stage.js");
var sprite1 = require("./角色1.js");
global.events.emit("greenFlag");