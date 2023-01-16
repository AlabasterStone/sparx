module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "!ify-loader!grapheme-breaker":
/*!***********************************!*\
  !*** external "grapheme-breaker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grapheme-breaker");

/***/ }),

/***/ "!ify-loader!linebreak":
/*!****************************!*\
  !*** external "linebreak" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("linebreak");

/***/ }),

/***/ "./node_modules/microee/index.js":
/*!***************************************!*\
  !*** ./node_modules/microee/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function M() { this._events = {}; }
M.prototype = {
  on: function(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function(ev, cb) {
    var e = this._events[ev] || [], i;
    for(i = e.length-1; i >= 0 && e[i]; i--){
      if(e[i] === cb || e[i].cb === cb) { e.splice(i, 1); }
    }
  },
  removeAllListeners: function(ev) {
    if(!ev) { this._events = {}; }
    else { this._events[ev] && (this._events[ev] = []); }
  },
  listeners: function(ev) {
    return (this._events ? this._events[ev] || [] : []);
  },
  emit: function(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1), i, e = this._events[ev] || [];
    for(i = e.length-1; i >= 0 && e[i]; i--){
      e[i].apply(this, args);
    }
    return this;
  },
  when: function(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function(ev, cb, when) {
    if(!cb) return this;
    function c() {
      if(!when) this.removeListener(ev, c);
      if(cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function(dest) {
  var o = M.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
module.exports = M;


/***/ }),

/***/ "./node_modules/minilog/lib/common/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/minilog/lib/common/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// default filter
var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js");

var levelMap = { debug: 1, info: 2, warn: 3, error: 4 };

function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}

Transform.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function(name, level) {
  this._white.push({ n: name, l: levelMap[level] });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function(name, level) {
  this._black.push({ n: name, l: levelMap[level] });
  return this;
};

Filter.prototype.clear = function() {
  this._white = [];
  this._black = [];
  return this;
};

function test(rule, name) {
  // use .test for RegExps
  return (rule.n.test ? rule.n.test(name) : rule.n == name);
};

Filter.prototype.test = function(name, level) {
  var i, len = Math.max(this._white.length, this._black.length);
  for(i = 0; i < len; i++) {
    if(this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if(this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};

Filter.prototype.write = function(name, level, args) {
  if(!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};

module.exports = Filter;


/***/ }),

/***/ "./node_modules/minilog/lib/common/minilog.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/common/minilog.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    Filter = __webpack_require__(/*! ./filter.js */ "./node_modules/minilog/lib/common/filter.js");

var log = new Transform(),
    slice = Array.prototype.slice;

exports = module.exports = function create(name) {
  var o   = function() { log.write(name, undefined, slice.call(arguments)); return o; };
  o.debug = function() { log.write(name, 'debug', slice.call(arguments)); return o; };
  o.info  = function() { log.write(name, 'info',  slice.call(arguments)); return o; };
  o.warn  = function() { log.write(name, 'warn',  slice.call(arguments)); return o; };
  o.error = function() { log.write(name, 'error', slice.call(arguments)); return o; };
  o.log   = o.debug; // for interface compliance with Node and browser consoles
  o.suggest = exports.suggest;
  o.format = log.format;
  return o;
};

// filled in separately
exports.defaultBackend = exports.defaultFormatter = null;

exports.pipe = function(dest) {
  return log.pipe(dest);
};

exports.end = exports.unpipe = exports.disable = function(from) {
  return log.unpipe(from);
};

exports.Transform = Transform;
exports.Filter = Filter;
// this is the default filter that's applied when .enable() is called normally
// you can bypass it completely and set up your own pipes
exports.suggest = new Filter();

exports.enable = function() {
  if(exports.defaultFormatter) {
    return log.pipe(exports.suggest) // filter
              .pipe(exports.defaultFormatter) // formatter
              .pipe(exports.defaultBackend); // backend
  }
  return log.pipe(exports.suggest) // filter
            .pipe(exports.defaultBackend); // formatter
};



/***/ }),

/***/ "./node_modules/minilog/lib/common/transform.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/common/transform.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var microee = __webpack_require__(/*! microee */ "./node_modules/microee/index.js");

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform() {}

microee.mixin(Transform);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform.prototype.write = function(name, level, args) {
  this.emit('item', name, level, args);
};

Transform.prototype.end = function() {
  this.emit('end');
  this.removeAllListeners();
};

Transform.prototype.pipe = function(dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);

  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() { !dest._isStdio && dest.end(); }

  s.on('item', onItem);
  s.on('end', onEnd);

  s.when('unpipe', function(from) {
    var match = (from === dest) || typeof from == 'undefined';
    if(match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });

  return dest;
};

Transform.prototype.unpipe = function(from) {
  this.emit('unpipe', from);
  return this;
};

Transform.prototype.format = function(dest) {
  throw new Error([
    'Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:',
    'var Minilog = require(\'minilog\');',
    'Minilog',
    '  .pipe(Minilog.backends.console.formatClean)',
    '  .pipe(Minilog.backends.console);'].join('\n'));
};

Transform.mixin = function(dest) {
  var o = Transform.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

module.exports = Transform;


/***/ }),

/***/ "./node_modules/minilog/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/minilog/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./common/minilog.js */ "./node_modules/minilog/lib/common/minilog.js");

var consoleLogger = __webpack_require__(/*! ./node/console.js */ "./node_modules/minilog/lib/node/console.js");

// if we are running inside Electron then use the web version of console.js
var isElectron = (typeof window !== 'undefined' && window.process && window.process.type === 'renderer');
if (isElectron) {
  consoleLogger = __webpack_require__(/*! ./web/console.js */ "./node_modules/minilog/lib/web/console.js").minilog;
}

// intercept the pipe method and transparently wrap the stringifier, if the
// destination is a Node core stream

module.exports.Stringifier = __webpack_require__(/*! ./node/stringify.js */ "./node_modules/minilog/lib/node/stringify.js");

var oldPipe = module.exports.pipe;
module.exports.pipe = function(dest) {
  if(dest instanceof __webpack_require__(/*! stream */ "stream")) {
    return oldPipe.call(module.exports, new (module.exports.Stringifier)).pipe(dest);
  } else {
    return oldPipe.call(module.exports, dest);
  }
};

module.exports.defaultBackend = consoleLogger;
module.exports.defaultFormatter = consoleLogger.formatMinilog;

module.exports.backends = {
  redis: __webpack_require__(/*! ./node/redis.js */ "./node_modules/minilog/lib/node/redis.js"),
  nodeConsole: consoleLogger,
  console: consoleLogger
};


/***/ }),

/***/ "./node_modules/minilog/lib/node/console.js":
/*!**************************************************!*\
  !*** ./node_modules/minilog/lib/node/console.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function ConsoleBackend() { }

Transform.mixin(ConsoleBackend);

ConsoleBackend.prototype.write = function() {
  console.log.apply(console, arguments);
};

var e = new ConsoleBackend();

var levelMap = __webpack_require__(/*! ./formatters/util.js */ "./node_modules/minilog/lib/node/formatters/util.js").levelMap;

e.filterEnv = function() {
  console.error('Minilog.backends.console.filterEnv is deprecated in Minilog v2.');
  // return the instance of Minilog
  return __webpack_require__(/*! ../common/minilog.js */ "./node_modules/minilog/lib/common/minilog.js");
};

e.formatters = [
    'formatClean', 'formatColor', 'formatNpm',
    'formatLearnboost', 'formatMinilog', 'formatWithStack', 'formatTime'
];

e.formatClean = new (__webpack_require__(/*! ./formatters/clean.js */ "./node_modules/minilog/lib/node/formatters/clean.js"));
e.formatColor = new (__webpack_require__(/*! ./formatters/color.js */ "./node_modules/minilog/lib/node/formatters/color.js"));
e.formatNpm = new (__webpack_require__(/*! ./formatters/npm.js */ "./node_modules/minilog/lib/node/formatters/npm.js"));
e.formatLearnboost = new (__webpack_require__(/*! ./formatters/learnboost.js */ "./node_modules/minilog/lib/node/formatters/learnboost.js"));
e.formatMinilog = new (__webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/minilog/lib/node/formatters/minilog.js"));
e.formatWithStack = new (__webpack_require__(/*! ./formatters/withstack.js */ "./node_modules/minilog/lib/node/formatters/withstack.js"));
e.formatTime = new (__webpack_require__(/*! ./formatters/time.js */ "./node_modules/minilog/lib/node/formatters/time.js"));

module.exports = e;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/clean.js":
/*!***********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/clean.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function FormatClean() {}

Transform.mixin(FormatClean);

FormatClean.prototype.write = function(name, level, args) {
  function pad(s) { return (s.toString().length == 1? '0'+s : s); }
  this.emit('item', (name ? name + ' ' : '') + (level ? level + ' ' : '') + args.join(' '));
};

module.exports = FormatClean;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/color.js":
/*!***********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/color.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatColor() {}

Transform.mixin(FormatColor);

FormatColor.prototype.write = function(name, level, args) {
  var colors = { debug: 'magenta', info: 'cyan', warn: 'yellow', error: 'red' };
  function pad(s) { return (s.toString().length == 4? ' '+s : s); }
  this.emit('item', (name ? name + ' ' : '')
          + (level ? style('- ' + pad(level.toUpperCase()) + ' -', colors[level]) + ' ' : '')
          + args.join(' '));
};

module.exports = FormatColor;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/learnboost.js":
/*!****************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/learnboost.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatLearnboost() {}

Transform.mixin(FormatLearnboost);

FormatLearnboost.prototype.write = function(name, level, args) {
  var colors = { debug: 'grey', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', (name ? style(name +' ', 'grey') : '')
          + (level ? style(level, colors[level]) + ' ' : '')
          + args.join(' '));
};

module.exports = FormatLearnboost;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/minilog.js":
/*!*************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/minilog.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style,
    util = __webpack_require__(/*! util */ "util");

function FormatMinilog() {}

Transform.mixin(FormatMinilog);

FormatMinilog.prototype.write = function(name, level, args) {
  var colors = { debug: 'blue', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', (name ? style(name +' ', 'grey') : '')
            + (level ? style(level, colors[level]) + ' ' : '')
            + args.map(function(item) {
              return (typeof item == 'string' ? item : util.inspect(item, null, 3, true));
            }).join(' '));
};

module.exports = FormatMinilog;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/npm.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/npm.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function FormatNpm() {}

Transform.mixin(FormatNpm);

FormatNpm.prototype.write = function(name, level, args) {
  var out = {
        debug: '\033[34;40m' + 'debug' + '\033[39m ',
        info: '\033[32m' + 'info'  + '\033[39m  ',
        warn: '\033[30;41m' + 'WARN' + '\033[0m  ',
        error: '\033[31;40m' + 'ERR!' + '\033[0m  '
      };
  this.emit('item', (name ? '\033[37;40m'+ name +'\033[0m ' : '')
          + (level && out[level]? out[level] : '')
          + args.join(' '));
};

module.exports = FormatNpm;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/time.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/time.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style,
    util = __webpack_require__(/*! util */ "util");

function FormatTime() {}

function timestamp() {
  var d = new Date();
  return ('0' + d.getDate()).slice(-2) + '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
    d.getFullYear() + ' ' +
    ('0' + d.getHours()).slice(-2) + ':' +
    ('0' + d.getMinutes()).slice(-2) + ':' +
    ('0' + d.getSeconds()).slice(-2) + '.' +
    ('00' + d.getMilliseconds()).slice(-3);
}

Transform.mixin(FormatTime);

FormatTime.prototype.write = function(name, level, args) {
  var colors = { debug: 'blue', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', style(timestamp() +' ', 'grey')
            + (name ? style(name +' ', 'grey') : '')
            + (level ? style(level, colors[level]) + ' ' : '')
            + args.map(function(item) {
              return (typeof item == 'string' ? item : util.inspect(item, null, 3, true));
            }).join(' '));
};

module.exports = FormatTime;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/util.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var styles = {
    //styles
    'bold'      : ['\033[1m',  '\033[22m'],
    'italic'    : ['\033[3m',  '\033[23m'],
    'underline' : ['\033[4m',  '\033[24m'],
    'inverse'   : ['\033[7m',  '\033[27m'],
    //grayscale
    'white'     : ['\033[37m', '\033[39m'],
    'grey'      : ['\033[90m', '\033[39m'],
    'black'     : ['\033[30m', '\033[39m'],
    //colors
    'blue'      : ['\033[34m', '\033[39m'],
    'cyan'      : ['\033[36m', '\033[39m'],
    'green'     : ['\033[32m', '\033[39m'],
    'magenta'   : ['\033[35m', '\033[39m'],
    'red'       : ['\033[31m', '\033[39m'],
    'yellow'    : ['\033[33m', '\033[39m']
  };

exports.levelMap = { debug: 1, info: 2, warn: 3, error: 4 };

exports.style = function(str, style) {
  return styles[style][0] + str + styles[style][1];
}



/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/withstack.js":
/*!***************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/withstack.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatNpm() {}

Transform.mixin(FormatNpm);

function noop(a){
  return a;
}

var types = {
  string: noop,
  number: noop,
  default: JSON.stringify.bind(JSON)
};

function stringify(args) {
  return args.map(function(arg) {
    return (types[typeof arg] || types.default)(arg);
  });
}

FormatNpm.prototype.write = function(name, level, args) {
  var colors = { debug: 'magenta', info: 'cyan', warn: 'yellow', error: 'red' };
  function pad(s) { return (s.toString().length == 4? ' '+s : s); }
  function getStack() {
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function (err, stack) {
      return stack;
    };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }

  var frame = getStack()[5],
      fileName = FormatNpm.fullPath ? frame.getFileName() : frame.getFileName().replace(/^.*\/(.+)$/, '/$1');

  this.emit('item', (name ? name + ' ' : '')
          + (level ? style(pad(level), colors[level]) + ' ' : '')
          + style(fileName + ":" + frame.getLineNumber(), 'grey')
          + ' '
          + stringify(args).join(' '));
};

FormatNpm.fullPath = true;

module.exports = FormatNpm;



/***/ }),

/***/ "./node_modules/minilog/lib/node/redis.js":
/*!************************************************!*\
  !*** ./node_modules/minilog/lib/node/redis.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function RedisBackend(options) {
  this.client = options.client;
  this.key = options.key;
}

RedisBackend.prototype.write = function(str) {
  this.client.rpush(this.key, str);
};

RedisBackend.prototype.end = function() {};

RedisBackend.prototype.clear = function(cb) {
  this.client.del(this.key, cb);
};

module.exports = RedisBackend;


/***/ }),

/***/ "./node_modules/minilog/lib/node/stringify.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/node/stringify.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function Stringify() {}

Transform.mixin(Stringify);

Stringify.prototype.write = function(name, level, args) {
  var result = [];
  if(name) result.push(name);
  if(level) result.push(level);
  result = result.concat(args);
  for(var i = 0; i < result.length; i++) {
    if(result[i] && typeof result[i] == 'object') {
      // Buffers in Node.js look bad when stringified
      if(result[i].constructor && result[i].constructor.isBuffer) {
        result[i] = result[i].toString();
      } else {
        try {
          result[i] = JSON.stringify(result[i]);
        } catch(stringifyError) {
          // happens when an object has a circular structure
          // do not throw an error, when printing, the toString() method of the object will be used
        }
      }
    } else {
      result[i] = result[i];
    }
  }
  this.emit('item',  result.join(' ') + '\n');
};

module.exports = Stringify;


/***/ }),

/***/ "./node_modules/minilog/lib/web/console.js":
/*!*************************************************!*\
  !*** ./node_modules/minilog/lib/web/console.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

var newlines = /\n+$/,
    logger = new Transform();

logger.write = function(name, level, args) {
  var i = args.length-1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if(console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if(JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if(args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for(i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch(e) {}
    console.log(args.join(' '));
  }
};

logger.formatters = ['color', 'minilog'];
logger.color = __webpack_require__(/*! ./formatters/color.js */ "./node_modules/minilog/lib/web/formatters/color.js");
logger.minilog = __webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/minilog/lib/web/formatters/minilog.js");

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/color.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js");

var colors = { debug: ['cyan'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, [ '%c'+name+' %c'+level, color('gray'), color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/minilog.js":
/*!************************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/minilog.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js"),
    colors = { debug: ['gray'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(level != 'debug' && console[level]) {
    fn = console[level];
  }

  var subset = [], i = 0;
  if(level != 'info') {
    for(; i < args.length; i++) {
      if(typeof args[i] != 'string') break;
    }
    fn.apply(console, [ '%c'+name +' '+ args.slice(0, i).join(' '), color.apply(color, colors[level]) ].concat(args.slice(i)));
  } else {
    fn.apply(console, [ '%c'+name, color.apply(color, colors[level]) ].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/util.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue:  '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color(fg, isInverse) {
  if(isInverse) {
    return 'color: #fff; background: '+hex[fg]+';';
  } else {
    return 'color: '+hex[fg]+';';
  }
}

module.exports = color;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shaders/sprite.frag":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader!./src/shaders/sprite.frag ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\n#ifdef DRAW_MODE_silhouette\nuniform vec4 u_silhouetteColor;\n#else // DRAW_MODE_silhouette\n# ifdef ENABLE_color\nuniform float u_color;\n# endif // ENABLE_color\n# ifdef ENABLE_brightness\nuniform float u_brightness;\n# endif // ENABLE_brightness\n#endif // DRAW_MODE_silhouette\n\n#ifdef DRAW_MODE_colorMask\nuniform vec3 u_colorMask;\nuniform float u_colorMaskTolerance;\n#endif // DRAW_MODE_colorMask\n\n#ifdef ENABLE_fisheye\nuniform float u_fisheye;\n#endif // ENABLE_fisheye\n#ifdef ENABLE_whirl\nuniform float u_whirl;\n#endif // ENABLE_whirl\n#ifdef ENABLE_pixelate\nuniform float u_pixelate;\nuniform vec2 u_skinSize;\n#endif // ENABLE_pixelate\n#ifdef ENABLE_mosaic\nuniform float u_mosaic;\n#endif // ENABLE_mosaic\n#ifdef ENABLE_ghost\nuniform float u_ghost;\n#endif // ENABLE_ghost\n\n#ifdef DRAW_MODE_line\nuniform vec4 u_lineColor;\nuniform float u_lineThickness;\nuniform float u_lineLength;\n#endif // DRAW_MODE_line\n\n#ifdef DRAW_MODE_background\nuniform vec4 u_backgroundColor;\n#endif // DRAW_MODE_background\n\nuniform sampler2D u_skin;\n\n#ifndef DRAW_MODE_background\nvarying vec2 v_texCoord;\n#endif\n\n// Add this to divisors to prevent division by 0, which results in NaNs propagating through calculations.\n// Smaller values can cause problems on some mobile devices.\nconst float epsilon = 1e-3;\n\n#if !defined(DRAW_MODE_silhouette) && (defined(ENABLE_color))\n// Branchless color conversions based on code from:\n// http://www.chilliant.com/rgb2hsv.html by Ian Taylor\n// Based in part on work by Sam Hocevar and Emil Persson\n// See also: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation\n\n\n// Convert an RGB color to Hue, Saturation, and Value.\n// All components of input and output are expected to be in the [0,1] range.\nvec3 convertRGB2HSV(vec3 rgb)\n{\n\t// Hue calculation has 3 cases, depending on which RGB component is largest, and one of those cases involves a \"mod\"\n\t// operation. In order to avoid that \"mod\" we split the M==R case in two: one for G<B and one for B>G. The B>G case\n\t// will be calculated in the negative and fed through abs() in the hue calculation at the end.\n\t// See also: https://en.wikipedia.org/wiki/HSL_and_HSV#Hue_and_chroma\n\tconst vec4 hueOffsets = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\n\t// temp1.xy = sort B & G (largest first)\n\t// temp1.z = the hue offset we'll use if it turns out that R is the largest component (M==R)\n\t// temp1.w = the hue offset we'll use if it turns out that R is not the largest component (M==G or M==B)\n\tvec4 temp1 = rgb.b > rgb.g ? vec4(rgb.bg, hueOffsets.wz) : vec4(rgb.gb, hueOffsets.xy);\n\n\t// temp2.x = the largest component of RGB (\"M\" / \"Max\")\n\t// temp2.yw = the smaller components of RGB, ordered for the hue calculation (not necessarily sorted by magnitude!)\n\t// temp2.z = the hue offset we'll use in the hue calculation\n\tvec4 temp2 = rgb.r > temp1.x ? vec4(rgb.r, temp1.yzx) : vec4(temp1.xyw, rgb.r);\n\n\t// m = the smallest component of RGB (\"min\")\n\tfloat m = min(temp2.y, temp2.w);\n\n\t// Chroma = M - m\n\tfloat C = temp2.x - m;\n\n\t// Value = M\n\tfloat V = temp2.x;\n\n\treturn vec3(\n\t\tabs(temp2.z + (temp2.w - temp2.y) / (6.0 * C + epsilon)), // Hue\n\t\tC / (temp2.x + epsilon), // Saturation\n\t\tV); // Value\n}\n\nvec3 convertHue2RGB(float hue)\n{\n\tfloat r = abs(hue * 6.0 - 3.0) - 1.0;\n\tfloat g = 2.0 - abs(hue * 6.0 - 2.0);\n\tfloat b = 2.0 - abs(hue * 6.0 - 4.0);\n\treturn clamp(vec3(r, g, b), 0.0, 1.0);\n}\n\nvec3 convertHSV2RGB(vec3 hsv)\n{\n\tvec3 rgb = convertHue2RGB(hsv.x);\n\tfloat c = hsv.z * hsv.y;\n\treturn rgb * c + hsv.z - c;\n}\n#endif // !defined(DRAW_MODE_silhouette) && (defined(ENABLE_color))\n\nconst vec2 kCenter = vec2(0.5, 0.5);\n\nvoid main()\n{\n\t#if !(defined(DRAW_MODE_line) || defined(DRAW_MODE_background))\n\tvec2 texcoord0 = v_texCoord;\n\n\t#ifdef ENABLE_mosaic\n\ttexcoord0 = fract(u_mosaic * texcoord0);\n\t#endif // ENABLE_mosaic\n\n\t#ifdef ENABLE_pixelate\n\t{\n\t\t// TODO: clean up \"pixel\" edges\n\t\tvec2 pixelTexelSize = u_skinSize / u_pixelate;\n\t\ttexcoord0 = (floor(texcoord0 * pixelTexelSize) + kCenter) / pixelTexelSize;\n\t}\n\t#endif // ENABLE_pixelate\n\n\t#ifdef ENABLE_whirl\n\t{\n\t\tconst float kRadius = 0.5;\n\t\tvec2 offset = texcoord0 - kCenter;\n\t\tfloat offsetMagnitude = length(offset);\n\t\tfloat whirlFactor = max(1.0 - (offsetMagnitude / kRadius), 0.0);\n\t\tfloat whirlActual = u_whirl * whirlFactor * whirlFactor;\n\t\tfloat sinWhirl = sin(whirlActual);\n\t\tfloat cosWhirl = cos(whirlActual);\n\t\tmat2 rotationMatrix = mat2(\n\t\t\tcosWhirl, -sinWhirl,\n\t\t\tsinWhirl, cosWhirl\n\t\t);\n\n\t\ttexcoord0 = rotationMatrix * offset + kCenter;\n\t}\n\t#endif // ENABLE_whirl\n\n\t#ifdef ENABLE_fisheye\n\t{\n\t\tvec2 vec = (texcoord0 - kCenter) / kCenter;\n\t\tfloat vecLength = length(vec);\n\t\tfloat r = pow(min(vecLength, 1.0), u_fisheye) * max(1.0, vecLength);\n\t\tvec2 unit = vec / vecLength;\n\n\t\ttexcoord0 = kCenter + r * unit * kCenter;\n\t}\n\t#endif // ENABLE_fisheye\n\n\tgl_FragColor = texture2D(u_skin, texcoord0);\n\n\t#if defined(ENABLE_color) || defined(ENABLE_brightness)\n\t// Divide premultiplied alpha values for proper color processing\n\t// Add epsilon to avoid dividing by 0 for fully transparent pixels\n\tgl_FragColor.rgb = clamp(gl_FragColor.rgb / (gl_FragColor.a + epsilon), 0.0, 1.0);\n\n\t#ifdef ENABLE_color\n\t{\n\t\tvec3 hsv = convertRGB2HSV(gl_FragColor.xyz);\n\n\t\t// this code forces grayscale values to be slightly saturated\n\t\t// so that some slight change of hue will be visible\n\t\tconst float minLightness = 0.11 / 2.0;\n\t\tconst float minSaturation = 0.09;\n\t\tif (hsv.z < minLightness) hsv = vec3(0.0, 1.0, minLightness);\n\t\telse if (hsv.y < minSaturation) hsv = vec3(0.0, minSaturation, hsv.z);\n\n\t\thsv.x = mod(hsv.x + u_color, 1.0);\n\t\tif (hsv.x < 0.0) hsv.x += 1.0;\n\n\t\tgl_FragColor.rgb = convertHSV2RGB(hsv);\n\t}\n\t#endif // ENABLE_color\n\n\t#ifdef ENABLE_brightness\n\tgl_FragColor.rgb = clamp(gl_FragColor.rgb + vec3(u_brightness), vec3(0), vec3(1));\n\t#endif // ENABLE_brightness\n\n\t// Re-multiply color values\n\tgl_FragColor.rgb *= gl_FragColor.a + epsilon;\n\n\t#endif // defined(ENABLE_color) || defined(ENABLE_brightness)\n\n\t#ifdef ENABLE_ghost\n\tgl_FragColor *= u_ghost;\n\t#endif // ENABLE_ghost\n\n\t#ifdef DRAW_MODE_silhouette\n\t// Discard fully transparent pixels for stencil test\n\tif (gl_FragColor.a == 0.0) {\n\t\tdiscard;\n\t}\n\t// switch to u_silhouetteColor only AFTER the alpha test\n\tgl_FragColor = u_silhouetteColor;\n\t#else // DRAW_MODE_silhouette\n\n\t#ifdef DRAW_MODE_colorMask\n\tvec3 maskDistance = abs(gl_FragColor.rgb - u_colorMask);\n\tvec3 colorMaskTolerance = vec3(u_colorMaskTolerance, u_colorMaskTolerance, u_colorMaskTolerance);\n\tif (any(greaterThan(maskDistance, colorMaskTolerance)))\n\t{\n\t\tdiscard;\n\t}\n\t#endif // DRAW_MODE_colorMask\n\t#endif // DRAW_MODE_silhouette\n\n\t#ifdef DRAW_MODE_straightAlpha\n\t// Un-premultiply alpha.\n\tgl_FragColor.rgb /= gl_FragColor.a + epsilon;\n\t#endif\n\n\t#endif // !(defined(DRAW_MODE_line) || defined(DRAW_MODE_background))\n\n\t#ifdef DRAW_MODE_line\n\t// Maaaaagic antialiased-line-with-round-caps shader.\n\n\t// \"along-the-lineness\". This increases parallel to the line.\n\t// It goes from negative before the start point, to 0.5 through the start to the end, then ramps up again\n\t// past the end point.\n\tfloat d = ((v_texCoord.x - clamp(v_texCoord.x, 0.0, u_lineLength)) * 0.5) + 0.5;\n\n\t// Distance from (0.5, 0.5) to (d, the perpendicular coordinate). When we're in the middle of the line,\n\t// d will be 0.5, so the distance will be 0 at points close to the line and will grow at points further from it.\n\t// For the \"caps\", d will ramp down/up, giving us rounding.\n\t// See https://www.youtube.com/watch?v=PMltMdi1Wzg for a rough outline of the technique used to round the lines.\n\tfloat line = distance(vec2(0.5), vec2(d, v_texCoord.y)) * 2.0;\n\t// Expand out the line by its thickness.\n\tline -= ((u_lineThickness - 1.0) * 0.5);\n\t// Because \"distance to the center of the line\" decreases the closer we get to the line, but we want more opacity\n\t// the closer we are to the line, invert it.\n\tgl_FragColor = u_lineColor * clamp(1.0 - line, 0.0, 1.0);\n\t#endif // DRAW_MODE_line\n\n\t#ifdef DRAW_MODE_background\n\tgl_FragColor = u_backgroundColor;\n\t#endif\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shaders/sprite.vert":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader!./src/shaders/sprite.vert ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\n#ifdef DRAW_MODE_line\nuniform vec2 u_stageSize;\nuniform float u_lineThickness;\nuniform float u_lineLength;\n// The X and Y components of u_penPoints hold the first pen point. The Z and W components hold the difference between\n// the second pen point and the first. This is done because calculating the difference in the shader leads to floating-\n// point error when both points have large-ish coordinates.\nuniform vec4 u_penPoints;\n\n// Add this to divisors to prevent division by 0, which results in NaNs propagating through calculations.\n// Smaller values can cause problems on some mobile devices.\nconst float epsilon = 1e-3;\n#endif\n\n#if !(defined(DRAW_MODE_line) || defined(DRAW_MODE_background))\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_modelMatrix;\nattribute vec2 a_texCoord;\n#endif\n\nattribute vec2 a_position;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n\t#ifdef DRAW_MODE_line\n\t// Calculate a rotated (\"tight\") bounding box around the two pen points.\n\t// Yes, we're doing this 6 times (once per vertex), but on actual GPU hardware,\n\t// it's still faster than doing it in JS combined with the cost of uniformMatrix4fv.\n\n\t// Expand line bounds by sqrt(2) / 2 each side-- this ensures that all antialiased pixels\n\t// fall within the quad, even at a 45-degree diagonal\n\tvec2 position = a_position;\n\tfloat expandedRadius = (u_lineThickness * 0.5) + 1.4142135623730951;\n\n\t// The X coordinate increases along the length of the line. It's 0 at the center of the origin point\n\t// and is in pixel-space (so at n pixels along the line, its value is n).\n\tv_texCoord.x = mix(0.0, u_lineLength + (expandedRadius * 2.0), a_position.x) - expandedRadius;\n\t// The Y coordinate is perpendicular to the line. It's also in pixel-space.\n\tv_texCoord.y = ((a_position.y - 0.5) * expandedRadius) + 0.5;\n\n\tposition.x *= u_lineLength + (2.0 * expandedRadius);\n\tposition.y *= 2.0 * expandedRadius;\n\n\t// 1. Center around first pen point\n\tposition -= expandedRadius;\n\n\t// 2. Rotate quad to line angle\n\tvec2 pointDiff = u_penPoints.zw;\n\t// Ensure line has a nonzero length so it's rendered properly\n\t// As long as either component is nonzero, the line length will be nonzero\n\t// If the line is zero-length, give it a bit of horizontal length\n\tpointDiff.x = (abs(pointDiff.x) < epsilon && abs(pointDiff.y) < epsilon) ? epsilon : pointDiff.x;\n\t// The `normalized` vector holds rotational values equivalent to sine/cosine\n\t// We're applying the standard rotation matrix formula to the position to rotate the quad to the line angle\n\t// pointDiff can hold large values so we must divide by u_lineLength instead of calling GLSL's normalize function:\n\t// https://asawicki.info/news_1596_watch_out_for_reduced_precision_normalizelength_in_opengl_es\n\tvec2 normalized = pointDiff / max(u_lineLength, epsilon);\n\tposition = mat2(normalized.x, normalized.y, -normalized.y, normalized.x) * position;\n\n\t// 3. Translate quad\n\tposition += u_penPoints.xy;\n\n\t// 4. Apply view transform\n\tposition *= 2.0 / u_stageSize;\n\tgl_Position = vec4(position, 0, 1);\n\t#elif defined(DRAW_MODE_background)\n\tgl_Position = vec4(a_position * 2.0, 0, 1);\n\t#else\n\tgl_Position = u_projectionMatrix * u_modelMatrix * vec4(a_position, 0, 1);\n\tv_texCoord = a_texCoord;\n\t#endif\n}\n"

/***/ }),

/***/ "./src/BitmapSkin.js":
/*!***************************!*\
  !*** ./src/BitmapSkin.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var Skin = __webpack_require__(/*! ./Skin */ "./src/Skin.js");

var BitmapSkin = function (_Skin) {
    _inherits(BitmapSkin, _Skin);

    /**
     * Create a new Bitmap Skin.
     * @extends Skin
     * @param {!int} id - The ID for this Skin.
     * @param {!RenderWebGL} renderer - The renderer which will use this skin.
     */
    function BitmapSkin(id, renderer) {
        _classCallCheck(this, BitmapSkin);

        /** @type {!int} */
        var _this = _possibleConstructorReturn(this, (BitmapSkin.__proto__ || Object.getPrototypeOf(BitmapSkin)).call(this, id));

        _this._costumeResolution = 1;

        /** @type {!RenderWebGL} */
        _this._renderer = renderer;

        /** @type {Array<int>} */
        _this._textureSize = [0, 0];
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(BitmapSkin, [{
        key: 'dispose',
        value: function dispose() {
            if (this._texture) {
                this._renderer.gl.deleteTexture(this._texture);
                this._texture = null;
            }
            _get(BitmapSkin.prototype.__proto__ || Object.getPrototypeOf(BitmapSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @return {Array<number>} the "native" size, in texels, of this skin.
         */

    }, {
        key: 'getTexture',


        /**
         * @param {Array<number>} scale - The scaling factors to be used.
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given scale.
         */
        // eslint-disable-next-line no-unused-vars
        value: function getTexture(scale) {
            return this._texture || _get(BitmapSkin.prototype.__proto__ || Object.getPrototypeOf(BitmapSkin.prototype), 'getTexture', this).call(this);
        }

        /**
         * Set the contents of this skin to a snapshot of the provided bitmap data.
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - new contents for this skin.
         * @param {int} [costumeResolution=1] - The resolution to use for this bitmap.
         * @param {Array<number>} [rotationCenter] - Optional rotation center for the bitmap. If not supplied, it will be
         * calculated from the bounding box
         * @fires Skin.event:WasAltered
         */

    }, {
        key: 'setBitmap',
        value: function setBitmap(bitmapData, costumeResolution, rotationCenter) {
            if (!bitmapData.width || !bitmapData.height) {
                _get(BitmapSkin.prototype.__proto__ || Object.getPrototypeOf(BitmapSkin.prototype), 'setEmptyImageData', this).call(this);
                return;
            }
            var gl = this._renderer.gl;

            // Preferably bitmapData is ImageData. ImageData speeds up updating
            // Silhouette and is better handled by more browsers in regards to
            // memory.
            var textureData = bitmapData;
            if (bitmapData instanceof HTMLCanvasElement) {
                // Given a HTMLCanvasElement get the image data to pass to webgl and
                // Silhouette.
                var context = bitmapData.getContext('2d');
                textureData = context.getImageData(0, 0, bitmapData.width, bitmapData.height);
            }

            if (this._texture === null) {
                var textureOptions = {
                    auto: false,
                    wrap: gl.CLAMP_TO_EDGE
                };

                this._texture = twgl.createTexture(gl, textureOptions);
            }

            this._setTexture(textureData);

            // Do these last in case any of the above throws an exception
            this._costumeResolution = costumeResolution || 2;
            this._textureSize = BitmapSkin._getBitmapSize(bitmapData);

            if (typeof rotationCenter === 'undefined') rotationCenter = this.calculateRotationCenter();
            this._rotationCenter[0] = rotationCenter[0];
            this._rotationCenter[1] = rotationCenter[1];

            this.emit(Skin.Events.WasAltered);
        }

        /**
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - bitmap data to inspect.
         * @returns {Array<int>} the width and height of the bitmap data, in pixels.
         * @private
         */

    }, {
        key: 'size',
        get: function get() {
            return [this._textureSize[0] / this._costumeResolution, this._textureSize[1] / this._costumeResolution];
        }
    }], [{
        key: '_getBitmapSize',
        value: function _getBitmapSize(bitmapData) {
            if (bitmapData instanceof HTMLImageElement) {
                return [bitmapData.naturalWidth || bitmapData.width, bitmapData.naturalHeight || bitmapData.height];
            }

            if (bitmapData instanceof HTMLVideoElement) {
                return [bitmapData.videoWidth || bitmapData.width, bitmapData.videoHeight || bitmapData.height];
            }

            // ImageData or HTMLCanvasElement
            return [bitmapData.width, bitmapData.height];
        }
    }]);

    return BitmapSkin;
}(Skin);

module.exports = BitmapSkin;

/***/ }),

/***/ "./src/Drawable.js":
/*!*************************!*\
  !*** ./src/Drawable.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var Rectangle = __webpack_require__(/*! ./Rectangle */ "./src/Rectangle.js");
var RenderConstants = __webpack_require__(/*! ./RenderConstants */ "./src/RenderConstants.js");
var ShaderManager = __webpack_require__(/*! ./ShaderManager */ "./src/ShaderManager.js");
var Skin = __webpack_require__(/*! ./Skin */ "./src/Skin.js");
var EffectTransform = __webpack_require__(/*! ./EffectTransform */ "./src/EffectTransform.js");
var log = __webpack_require__(/*! ./util/log */ "./src/util/log.js");

/**
 * An internal workspace for calculating texture locations from world vectors
 * this is REUSED for memory conservation reasons
 * @type {twgl.v3}
 */
var __isTouchingPosition = twgl.v3.create();
var FLOATING_POINT_ERROR_ALLOWANCE = 1e-6;

/**
 * Convert a scratch space location into a texture space float.  Uses the
 * internal __isTouchingPosition as a return value, so this should be copied
 * if you ever need to get two local positions and store both.  Requires that
 * the drawable inverseMatrix is up to date.
 *
 * @param {Drawable} drawable The drawable to get the inverse matrix and uniforms from
 * @param {twgl.v3} vec [x,y] scratch space vector
 * @return {twgl.v3} [x,y] texture space float vector - transformed by effects and matrix
 */
var getLocalPosition = function getLocalPosition(drawable, vec) {
    // Transfrom from world coordinates to Drawable coordinates.
    var localPosition = __isTouchingPosition;
    var v0 = vec[0];
    var v1 = vec[1];
    var m = drawable._inverseMatrix;
    // var v2 = v[2];
    var d = v0 * m[3] + v1 * m[7] + m[15];
    // The RenderWebGL quad flips the texture's X axis. So rendered bottom
    // left is 1, 0 and the top right is 0, 1. Flip the X axis so
    // localPosition matches that transformation.
    localPosition[0] = 0.5 - (v0 * m[0] + v1 * m[4] + m[12]) / d;
    localPosition[1] = (v0 * m[1] + v1 * m[5] + m[13]) / d + 0.5;
    // Fix floating point issues near 0. Filed https://github.com/LLK/scratch-render/issues/688 that
    // they're happening in the first place.
    // TODO: Check if this can be removed after render pull 479 is merged
    if (Math.abs(localPosition[0]) < FLOATING_POINT_ERROR_ALLOWANCE) localPosition[0] = 0;
    if (Math.abs(localPosition[1]) < FLOATING_POINT_ERROR_ALLOWANCE) localPosition[1] = 0;
    // Apply texture effect transform if the localPosition is within the drawable's space,
    // and any effects are currently active.
    if (drawable.enabledEffects !== 0 && localPosition[0] >= 0 && localPosition[0] < 1 && localPosition[1] >= 0 && localPosition[1] < 1) {

        EffectTransform.transformPoint(drawable, localPosition, localPosition);
    }
    return localPosition;
};

var Drawable = function () {
    /**
     * An object which can be drawn by the renderer.
     * @todo double-buffer all rendering state (position, skin, effects, etc.)
     * @param {!int} id - This Drawable's unique ID.
     * @constructor
     */
    function Drawable(id) {
        _classCallCheck(this, Drawable);

        /** @type {!int} */
        this._id = id;

        /**
         * The uniforms to be used by the vertex and pixel shaders.
         * Some of these are used by other parts of the renderer as well.
         * @type {Object.<string,*>}
         * @private
         */
        this._uniforms = {
            /**
             * The model matrix, to concat with projection at draw time.
             * @type {module:twgl/m4.Mat4}
             */
            u_modelMatrix: twgl.m4.identity(),

            /**
             * The color to use in the silhouette draw mode.
             * @type {Array<number>}
             */
            u_silhouetteColor: Drawable.color4fFromID(this._id)
        };

        // Effect values are uniforms too
        var numEffects = ShaderManager.EFFECTS.length;
        for (var index = 0; index < numEffects; ++index) {
            var effectName = ShaderManager.EFFECTS[index];
            var effectInfo = ShaderManager.EFFECT_INFO[effectName];
            var converter = effectInfo.converter;
            this._uniforms[effectInfo.uniformName] = converter(0);
        }

        this._position = twgl.v3.create(0, 0);
        this._scale = twgl.v3.create(100, 100);
        this._direction = 90;
        this._transformDirty = true;
        this._rotationMatrix = twgl.m4.identity();
        this._rotationTransformDirty = true;
        this._rotationAdjusted = twgl.v3.create();
        this._rotationCenterDirty = true;
        this._skinScale = twgl.v3.create(0, 0, 0);
        this._skinScaleDirty = true;
        this._inverseMatrix = twgl.m4.identity();
        this._inverseTransformDirty = true;
        this._visible = true;

        /** A bitmask identifying which effects are currently in use.
         * @readonly
         * @type {int} */
        this.enabledEffects = 0;

        /** @todo move convex hull functionality, maybe bounds functionality overall, to Skin classes */
        this._convexHullPoints = null;
        this._convexHullDirty = true;

        // The precise bounding box will be from the transformed convex hull points,
        // so initialize the array of transformed hull points in setConvexHullPoints.
        // Initializing it once per convex hull recalculation avoids unnecessary creation of twgl.v3 objects.
        this._transformedHullPoints = null;
        this._transformedHullDirty = true;

        this._skinWasAltered = this._skinWasAltered.bind(this);

        this.isTouching = this._isTouchingNever;
    }

    /**
     * Dispose of this Drawable. Do not use it after calling this method.
     */


    _createClass(Drawable, [{
        key: 'dispose',
        value: function dispose() {
            // Use the setter: disconnect events
            this.skin = null;
        }

        /**
         * Mark this Drawable's transform as dirty.
         * It will be recalculated next time it's needed.
         */

    }, {
        key: 'setTransformDirty',
        value: function setTransformDirty() {
            this._transformDirty = true;
            this._inverseTransformDirty = true;
            this._transformedHullDirty = true;
        }

        /**
         * @returns {number} The ID for this Drawable.
         */

    }, {
        key: 'getUniforms',


        /**
         * @returns {object.<string, *>} the shader uniforms to be used when rendering this Drawable.
         */
        value: function getUniforms() {
            if (this._transformDirty) {
                this._calculateTransform();
            }
            return this._uniforms;
        }

        /**
         * @returns {boolean} whether this Drawable is visible.
         */

    }, {
        key: 'getVisible',
        value: function getVisible() {
            return this._visible;
        }

        /**
         * Update the position if it is different. Marks the transform as dirty.
         * @param {Array.<number>} position A new position.
         */

    }, {
        key: 'updatePosition',
        value: function updatePosition(position) {
            if (this._position[0] !== position[0] || this._position[1] !== position[1]) {
                this._position[0] = Math.round(position[0]);
                this._position[1] = Math.round(position[1]);
                this.setTransformDirty();
            }
        }

        /**
         * Update the direction if it is different. Marks the transform as dirty.
         * @param {number} direction A new direction.
         */

    }, {
        key: 'updateDirection',
        value: function updateDirection(direction) {
            if (this._direction !== direction) {
                this._direction = direction;
                this._rotationTransformDirty = true;
                this.setTransformDirty();
            }
        }

        /**
         * Update the scale if it is different. Marks the transform as dirty.
         * @param {Array.<number>} scale A new scale.
         */

    }, {
        key: 'updateScale',
        value: function updateScale(scale) {
            if (this._scale[0] !== scale[0] || this._scale[1] !== scale[1]) {
                this._scale[0] = scale[0];
                this._scale[1] = scale[1];
                this._rotationCenterDirty = true;
                this._skinScaleDirty = true;
                this.setTransformDirty();
            }
        }

        /**
         * Update visibility if it is different. Marks the convex hull as dirty.
         * @param {boolean} visible A new visibility state.
         */

    }, {
        key: 'updateVisible',
        value: function updateVisible(visible) {
            if (this._visible !== visible) {
                this._visible = visible;
                this.setConvexHullDirty();
            }
        }

        /**
         * Update an effect. Marks the convex hull as dirty if the effect changes shape.
         * @param {string} effectName The name of the effect.
         * @param {number} rawValue A new effect value.
         */

    }, {
        key: 'updateEffect',
        value: function updateEffect(effectName, rawValue) {
            var effectInfo = ShaderManager.EFFECT_INFO[effectName];
            if (rawValue) {
                this.enabledEffects |= effectInfo.mask;
            } else {
                this.enabledEffects &= ~effectInfo.mask;
            }
            var converter = effectInfo.converter;
            this._uniforms[effectInfo.uniformName] = converter(rawValue);
            if (effectInfo.shapeChanges) {
                this.setConvexHullDirty();
            }
        }

        /**
         * Update the position, direction, scale, or effect properties of this Drawable.
         * @deprecated Use specific update* methods instead.
         * @param {object.<string,*>} properties The new property values to set.
         */

    }, {
        key: 'updateProperties',
        value: function updateProperties(properties) {
            if ('position' in properties) {
                this.updatePosition(properties.position);
            }
            if ('direction' in properties) {
                this.updateDirection(properties.direction);
            }
            if ('scale' in properties) {
                this.updateScale(properties.scale);
            }
            if ('visible' in properties) {
                this.updateVisible(properties.visible);
            }
            var numEffects = ShaderManager.EFFECTS.length;
            for (var index = 0; index < numEffects; ++index) {
                var effectName = ShaderManager.EFFECTS[index];
                if (effectName in properties) {
                    this.updateEffect(effectName, properties[effectName]);
                }
            }
        }

        /**
         * Calculate the transform to use when rendering this Drawable.
         * @private
         */

    }, {
        key: '_calculateTransform',
        value: function _calculateTransform() {
            if (this._rotationTransformDirty) {
                var rotation = (270 - this._direction) * Math.PI / 180;

                // Calling rotationZ sets the destination matrix to a rotation
                // around the Z axis setting matrix components 0, 1, 4 and 5 with
                // cosine and sine values of the rotation.
                // twgl.m4.rotationZ(rotation, this._rotationMatrix);

                // twgl assumes the last value set to the matrix was anything.
                // Drawable knows, it was another rotationZ matrix, so we can skip
                // assigning the values that will never change.
                var c = Math.cos(rotation);
                var s = Math.sin(rotation);
                this._rotationMatrix[0] = c;
                this._rotationMatrix[1] = s;
                // this._rotationMatrix[2] = 0;
                // this._rotationMatrix[3] = 0;
                this._rotationMatrix[4] = -s;
                this._rotationMatrix[5] = c;
                // this._rotationMatrix[6] = 0;
                // this._rotationMatrix[7] = 0;
                // this._rotationMatrix[8] = 0;
                // this._rotationMatrix[9] = 0;
                // this._rotationMatrix[10] = 1;
                // this._rotationMatrix[11] = 0;
                // this._rotationMatrix[12] = 0;
                // this._rotationMatrix[13] = 0;
                // this._rotationMatrix[14] = 0;
                // this._rotationMatrix[15] = 1;

                this._rotationTransformDirty = false;
            }

            // Adjust rotation center relative to the skin.
            if (this._rotationCenterDirty && this.skin !== null) {
                // twgl version of the following in function work.
                // let rotationAdjusted = twgl.v3.subtract(
                //     this.skin.rotationCenter,
                //     twgl.v3.divScalar(this.skin.size, 2, this._rotationAdjusted),
                //     this._rotationAdjusted
                // );
                // rotationAdjusted = twgl.v3.multiply(
                //     rotationAdjusted, this._scale, rotationAdjusted
                // );
                // rotationAdjusted = twgl.v3.divScalar(
                //     rotationAdjusted, 100, rotationAdjusted
                // );
                // rotationAdjusted[1] *= -1; // Y flipped to Scratch coordinate.
                // rotationAdjusted[2] = 0; // Z coordinate is 0.

                // Locally assign rotationCenter and skinSize to keep from having
                // the Skin getter properties called twice while locally assigning
                // their components for readability.
                var rotationCenter = this.skin.rotationCenter;
                var skinSize = this.skin.size;
                var center0 = rotationCenter[0];
                var center1 = rotationCenter[1];
                var skinSize0 = skinSize[0];
                var skinSize1 = skinSize[1];
                var _scale = this._scale[0];
                var _scale2 = this._scale[1];

                var rotationAdjusted = this._rotationAdjusted;
                rotationAdjusted[0] = (center0 - skinSize0 / 2) * _scale / 100;
                rotationAdjusted[1] = (center1 - skinSize1 / 2) * _scale2 / 100 * -1;
                // rotationAdjusted[2] = 0;

                this._rotationCenterDirty = false;
            }

            if (this._skinScaleDirty && this.skin !== null) {
                // twgl version of the following in function work.
                // const scaledSize = twgl.v3.divScalar(
                //     twgl.v3.multiply(this.skin.size, this._scale),
                //     100
                // );
                // // was NaN because the vectors have only 2 components.
                // scaledSize[2] = 0;

                // Locally assign skinSize to keep from having the Skin getter
                // properties called twice.
                var _skinSize = this.skin.size;
                var scaledSize = this._skinScale;
                scaledSize[0] = _skinSize[0] * this._scale[0] / 100;
                scaledSize[1] = _skinSize[1] * this._scale[1] / 100;
                // scaledSize[2] = 0;

                this._skinScaleDirty = false;
            }

            var modelMatrix = this._uniforms.u_modelMatrix;

            // twgl version of the following in function work.
            // twgl.m4.identity(modelMatrix);
            // twgl.m4.translate(modelMatrix, this._position, modelMatrix);
            // twgl.m4.multiply(modelMatrix, this._rotationMatrix, modelMatrix);
            // twgl.m4.translate(modelMatrix, this._rotationAdjusted, modelMatrix);
            // twgl.m4.scale(modelMatrix, scaledSize, modelMatrix);

            // Drawable configures a 3D matrix for drawing in WebGL, but most values
            // will never be set because the inputs are on the X and Y position axis
            // and the Z rotation axis. Drawable can bring the work inside
            // _calculateTransform and greatly reduce the ammount of math and array
            // assignments needed.

            var scale0 = this._skinScale[0];
            var scale1 = this._skinScale[1];
            var rotation00 = this._rotationMatrix[0];
            var rotation01 = this._rotationMatrix[1];
            var rotation10 = this._rotationMatrix[4];
            var rotation11 = this._rotationMatrix[5];
            var adjusted0 = this._rotationAdjusted[0];
            var adjusted1 = this._rotationAdjusted[1];
            var position0 = this._position[0];
            var position1 = this._position[1];

            // Commented assignments show what the values are when the matrix was
            // instantiated. Those values will never change so they do not need to
            // be reassigned.
            modelMatrix[0] = scale0 * rotation00;
            modelMatrix[1] = scale0 * rotation01;
            // modelMatrix[2] = 0;
            // modelMatrix[3] = 0;
            modelMatrix[4] = scale1 * rotation10;
            modelMatrix[5] = scale1 * rotation11;
            // modelMatrix[6] = 0;
            // modelMatrix[7] = 0;
            // modelMatrix[8] = 0;
            // modelMatrix[9] = 0;
            // modelMatrix[10] = 1;
            // modelMatrix[11] = 0;
            modelMatrix[12] = rotation00 * adjusted0 + rotation10 * adjusted1 + position0;
            modelMatrix[13] = rotation01 * adjusted0 + rotation11 * adjusted1 + position1;
            // modelMatrix[14] = 0;
            // modelMatrix[15] = 1;

            this._transformDirty = false;
        }

        /**
         * Whether the Drawable needs convex hull points provided by the renderer.
         * @return {boolean} True when no convex hull known, or it's dirty.
         */

    }, {
        key: 'needsConvexHullPoints',
        value: function needsConvexHullPoints() {
            return !this._convexHullPoints || this._convexHullDirty || this._convexHullPoints.length === 0;
        }

        /**
         * Set the convex hull to be dirty.
         * Do this whenever the Drawable's shape has possibly changed.
         */

    }, {
        key: 'setConvexHullDirty',
        value: function setConvexHullDirty() {
            this._convexHullDirty = true;
        }

        /**
         * Set the convex hull points for the Drawable.
         * @param {Array<Array<number>>} points Convex hull points, as [[x, y], ...]
         */

    }, {
        key: 'setConvexHullPoints',
        value: function setConvexHullPoints(points) {
            this._convexHullPoints = points;
            this._convexHullDirty = false;

            // Re-create the "transformed hull points" array.
            // We only do this when the hull points change to avoid unnecessary allocations and GC.
            this._transformedHullPoints = [];
            for (var i = 0; i < points.length; i++) {
                this._transformedHullPoints.push(twgl.v3.create());
            }
            this._transformedHullDirty = true;
        }

        /**
         * @function
         * @name isTouching
         * Check if the world position touches the skin.
         * The caller is responsible for ensuring this drawable's inverse matrix & its skin's silhouette are up-to-date.
         * @see updateCPURenderAttributes
         * @param {twgl.v3} vec World coordinate vector.
         * @return {boolean} True if the world position touches the skin.
         */

        // `updateCPURenderAttributes` sets this Drawable instance's `isTouching` method
        // to one of the following three functions:
        // If this drawable has no skin, set it to `_isTouchingNever`.
        // Otherwise, if this drawable uses nearest-neighbor scaling at its current scale, set it to `_isTouchingNearest`.
        // Otherwise, set it to `_isTouchingLinear`.
        // This allows several checks to be moved from the `isTouching` function to `updateCPURenderAttributes`.

        // eslint-disable-next-line no-unused-vars

    }, {
        key: '_isTouchingNever',
        value: function _isTouchingNever(vec) {
            return false;
        }
    }, {
        key: '_isTouchingNearest',
        value: function _isTouchingNearest(vec) {
            return this.skin.isTouchingNearest(getLocalPosition(this, vec));
        }
    }, {
        key: '_isTouchingLinear',
        value: function _isTouchingLinear(vec) {
            return this.skin.isTouchingLinear(getLocalPosition(this, vec));
        }

        /**
         * Get the precise bounds for a Drawable.
         * This function applies the transform matrix to the known convex hull,
         * and then finds the minimum box along the axes.
         * Before calling this, ensure the renderer has updated convex hull points.
         * @param {?Rectangle} result optional destination for bounds calculation
         * @return {!Rectangle} Bounds for a tight box around the Drawable.
         */

    }, {
        key: 'getBounds',
        value: function getBounds(result) {
            if (this.needsConvexHullPoints()) {
                throw new Error('Needs updated convex hull points before bounds calculation.');
            }
            if (this._transformDirty) {
                this._calculateTransform();
            }
            var transformedHullPoints = this._getTransformedHullPoints();
            // Search through transformed points to generate box on axes.
            result = result || new Rectangle();
            result.initFromPointsAABB(transformedHullPoints);
            return result;
        }

        /**
         * Get the precise bounds for the upper 8px slice of the Drawable.
         * Used for calculating where to position a text bubble.
         * Before calling this, ensure the renderer has updated convex hull points.
         * @param {?Rectangle} result optional destination for bounds calculation
         * @return {!Rectangle} Bounds for a tight box around a slice of the Drawable.
         */

    }, {
        key: 'getBoundsForBubble',
        value: function getBoundsForBubble(result) {
            if (this.needsConvexHullPoints()) {
                throw new Error('Needs updated convex hull points before bubble bounds calculation.');
            }
            if (this._transformDirty) {
                this._calculateTransform();
            }
            var slice = 8; // px, how tall the top slice to measure should be.
            var transformedHullPoints = this._getTransformedHullPoints();
            var maxY = Math.max.apply(null, transformedHullPoints.map(function (p) {
                return p[1];
            }));
            var filteredHullPoints = transformedHullPoints.filter(function (p) {
                return p[1] > maxY - slice;
            });
            // Search through filtered points to generate box on axes.
            result = result || new Rectangle();
            result.initFromPointsAABB(filteredHullPoints);
            return result;
        }

        /**
         * Get the rough axis-aligned bounding box for the Drawable.
         * Calculated by transforming the skin's bounds.
         * Note that this is less precise than the box returned by `getBounds`,
         * which is tightly snapped to account for a Drawable's transparent regions.
         * `getAABB` returns a much less accurate bounding box, but will be much
         * faster to calculate so may be desired for quick checks/optimizations.
         * @param {?Rectangle} result optional destination for bounds calculation
         * @return {!Rectangle} Rough axis-aligned bounding box for Drawable.
         */

    }, {
        key: 'getAABB',
        value: function getAABB(result) {
            if (this._transformDirty) {
                this._calculateTransform();
            }
            var tm = this._uniforms.u_modelMatrix;
            result = result || new Rectangle();
            result.initFromModelMatrix(tm);
            return result;
        }

        /**
         * Return the best Drawable bounds possible without performing graphics queries.
         * I.e., returns the tight bounding box when the convex hull points are already
         * known, but otherwise return the rough AABB of the Drawable.
         * @param {?Rectangle} result optional destination for bounds calculation
         * @return {!Rectangle} Bounds for the Drawable.
         */

    }, {
        key: 'getFastBounds',
        value: function getFastBounds(result) {
            if (!this.needsConvexHullPoints()) {
                return this.getBounds(result);
            }
            return this.getAABB(result);
        }

        /**
         * Transform all the convex hull points by the current Drawable's
         * transform. This allows us to skip recalculating the convex hull
         * for many Drawable updates, including translation, rotation, scaling.
         * @return {!Array.<!Array.number>} Array of glPoints which are Array<x, y>
         * @private
         */

    }, {
        key: '_getTransformedHullPoints',
        value: function _getTransformedHullPoints() {
            if (!this._transformedHullDirty) {
                return this._transformedHullPoints;
            }

            var projection = twgl.m4.ortho(-1, 1, -1, 1, -1, 1);
            var skinSize = this.skin.size;
            var halfXPixel = 1 / skinSize[0] / 2;
            var halfYPixel = 1 / skinSize[1] / 2;
            var tm = twgl.m4.multiply(this._uniforms.u_modelMatrix, projection);
            for (var i = 0; i < this._convexHullPoints.length; i++) {
                var point = this._convexHullPoints[i];
                var dstPoint = this._transformedHullPoints[i];

                dstPoint[0] = 0.5 + -point[0] / skinSize[0] - halfXPixel;
                dstPoint[1] = point[1] / skinSize[1] - 0.5 + halfYPixel;
                twgl.m4.transformPoint(tm, dstPoint, dstPoint);
            }

            this._transformedHullDirty = false;

            return this._transformedHullPoints;
        }

        /**
         * Update the transform matrix and calculate it's inverse for collision
         * and local texture position purposes.
         */

    }, {
        key: 'updateMatrix',
        value: function updateMatrix() {
            if (this._transformDirty) {
                this._calculateTransform();
            }
            // Get the inverse of the model matrix or update it.
            if (this._inverseTransformDirty) {
                var inverse = this._inverseMatrix;
                twgl.m4.copy(this._uniforms.u_modelMatrix, inverse);
                // The normal matrix uses a z scaling of 0 causing model[10] to be
                // 0. Getting a 4x4 inverse is impossible without a scaling in x, y,
                // and z.
                inverse[10] = 1;
                twgl.m4.inverse(inverse, inverse);
                this._inverseTransformDirty = false;
            }
        }

        /**
         * Update everything necessary to render this drawable on the CPU.
         */

    }, {
        key: 'updateCPURenderAttributes',
        value: function updateCPURenderAttributes() {
            this.updateMatrix();
            // CPU rendering always occurs at the "native" size, so no need to scale up this._scale
            if (this.skin) {
                this.skin.updateSilhouette(this._scale);

                if (this.skin.useNearest(this._scale, this)) {
                    this.isTouching = this._isTouchingNearest;
                } else {
                    this.isTouching = this._isTouchingLinear;
                }
            } else {
                log.warn('Could not find skin for drawable with id: ' + this._id);

                this.isTouching = this._isTouchingNever;
            }
        }

        /**
         * Respond to an internal change in the current Skin.
         * @private
         */

    }, {
        key: '_skinWasAltered',
        value: function _skinWasAltered() {
            this._rotationCenterDirty = true;
            this._skinScaleDirty = true;
            this.setConvexHullDirty();
            this.setTransformDirty();
        }

        /**
         * Calculate a color to represent the given ID number. At least one component of
         * the resulting color will be non-zero if the ID is not RenderConstants.ID_NONE.
         * @param {int} id The ID to convert.
         * @returns {Array<number>} An array of [r,g,b,a], each component in the range [0,1].
         */

    }, {
        key: 'id',
        get: function get() {
            return this._id;
        }

        /**
         * @returns {Skin} the current skin for this Drawable.
         */

    }, {
        key: 'skin',
        get: function get() {
            return this._skin;
        }

        /**
         * @param {Skin} newSkin - A new Skin for this Drawable.
         */
        ,
        set: function set(newSkin) {
            if (this._skin !== newSkin) {
                if (this._skin) {
                    this._skin.removeListener(Skin.Events.WasAltered, this._skinWasAltered);
                }
                this._skin = newSkin;
                if (this._skin) {
                    this._skin.addListener(Skin.Events.WasAltered, this._skinWasAltered);
                }
                this._skinWasAltered();
            }
        }

        /**
         * @returns {Array<number>} the current scaling percentages applied to this Drawable. [100,100] is normal size.
         */

    }, {
        key: 'scale',
        get: function get() {
            return [this._scale[0], this._scale[1]];
        }
    }], [{
        key: 'color4fFromID',
        value: function color4fFromID(id) {
            id -= RenderConstants.ID_NONE;
            var r = (id >> 0 & 255) / 255.0;
            var g = (id >> 8 & 255) / 255.0;
            var b = (id >> 16 & 255) / 255.0;
            return [r, g, b, 1.0];
        }

        /**
         * Calculate the ID number represented by the given color. If all components of
         * the color are zero, the result will be RenderConstants.ID_NONE; otherwise the result
         * will be a valid ID.
         * @param {int} r The red value of the color, in the range [0,255].
         * @param {int} g The green value of the color, in the range [0,255].
         * @param {int} b The blue value of the color, in the range [0,255].
         * @returns {int} The ID represented by that color.
         */

    }, {
        key: 'color3bToID',
        value: function color3bToID(r, g, b) {
            var id = void 0;
            id = (r & 255) << 0;
            id |= (g & 255) << 8;
            id |= (b & 255) << 16;
            return id + RenderConstants.ID_NONE;
        }

        /**
         * Sample a color from a drawable's texture.
         * The caller is responsible for ensuring this drawable's inverse matrix & its skin's silhouette are up-to-date.
         * @see updateCPURenderAttributes
         * @param {twgl.v3} vec The scratch space [x,y] vector
         * @param {Drawable} drawable The drawable to sample the texture from
         * @param {Uint8ClampedArray} dst The "color4b" representation of the texture at point.
         * @param {number} [effectMask] A bitmask for which effects to use. Optional.
         * @returns {Uint8ClampedArray} The dst object filled with the color4b
         */

    }, {
        key: 'sampleColor4b',
        value: function sampleColor4b(vec, drawable, dst, effectMask) {
            var localPosition = getLocalPosition(drawable, vec);
            if (localPosition[0] < 0 || localPosition[1] < 0 || localPosition[0] > 1 || localPosition[1] > 1) {
                dst[0] = 0;
                dst[1] = 0;
                dst[2] = 0;
                dst[3] = 0;
                return dst;
            }

            var textColor =
            // commenting out to only use nearest for now
            // drawable.skin.useNearest(drawable._scale, drawable) ?
            drawable.skin._silhouette.colorAtNearest(localPosition, dst);
            // : drawable.skin._silhouette.colorAtLinear(localPosition, dst);

            if (drawable.enabledEffects === 0) return textColor;
            return EffectTransform.transformColor(drawable, textColor, effectMask);
        }
    }]);

    return Drawable;
}();

module.exports = Drawable;

/***/ }),

/***/ "./src/EffectTransform.js":
/*!********************************!*\
  !*** ./src/EffectTransform.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileoverview
 * A utility to transform a texture coordinate to another texture coordinate
 * representing how the shaders apply effects.
 */

var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var _require = __webpack_require__(/*! ./util/color-conversions */ "./src/util/color-conversions.js"),
    rgbToHsv = _require.rgbToHsv,
    hsvToRgb = _require.hsvToRgb;

var ShaderManager = __webpack_require__(/*! ./ShaderManager */ "./src/ShaderManager.js");

/**
 * A texture coordinate is between 0 and 1. 0.5 is the center position.
 * @const {number}
 */
var CENTER_X = 0.5;

/**
 * A texture coordinate is between 0 and 1. 0.5 is the center position.
 * @const {number}
 */
var CENTER_Y = 0.5;

/**
 * Reused memory location for storing an HSV color value.
 * @type {Array<number>}
 */
var __hsv = [0, 0, 0];

var EffectTransform = function () {
    function EffectTransform() {
        _classCallCheck(this, EffectTransform);
    }

    _createClass(EffectTransform, null, [{
        key: 'transformColor',


        /**
         * Transform a color in-place given the drawable's effect uniforms.  Will apply
         * Ghost and Color and Brightness effects.
         * @param {Drawable} drawable The drawable to get uniforms from.
         * @param {Uint8ClampedArray} inOutColor The color to transform.
         * @param {number} [effectMask] A bitmask for which effects to use. Optional.
         * @returns {Uint8ClampedArray} dst filled with the transformed color
         */
        value: function transformColor(drawable, inOutColor, effectMask) {
            // If the color is fully transparent, don't bother attempting any transformations.
            if (inOutColor[3] === 0) {
                return inOutColor;
            }

            var effects = drawable.enabledEffects;
            if (typeof effectMask === 'number') effects &= effectMask;
            var uniforms = drawable.getUniforms();

            var enableColor = (effects & ShaderManager.EFFECT_INFO.color.mask) !== 0;
            var enableBrightness = (effects & ShaderManager.EFFECT_INFO.brightness.mask) !== 0;

            if (enableColor || enableBrightness) {
                // gl_FragColor.rgb /= gl_FragColor.a + epsilon;
                // Here, we're dividing by the (previously pre-multiplied) alpha to ensure HSV is properly calculated
                // for partially transparent pixels.
                // epsilon is present in the shader because dividing by 0 (fully transparent pixels) messes up calculations.
                // We're doing this with a Uint8ClampedArray here, so dividing by 0 just gives 255. We're later multiplying
                // by 0 again, so it won't affect results.
                var alpha = inOutColor[3] / 255;
                inOutColor[0] /= alpha;
                inOutColor[1] /= alpha;
                inOutColor[2] /= alpha;

                if (enableColor) {
                    // vec3 hsv = convertRGB2HSV(gl_FragColor.xyz);
                    var hsv = rgbToHsv(inOutColor, __hsv);

                    // this code forces grayscale values to be slightly saturated
                    // so that some slight change of hue will be visible
                    // const float minLightness = 0.11 / 2.0;
                    var minV = 0.11 / 2.0;
                    // const float minSaturation = 0.09;
                    var minS = 0.09;
                    // if (hsv.z < minLightness) hsv = vec3(0.0, 1.0, minLightness);
                    if (hsv[2] < minV) {
                        hsv[0] = 0;
                        hsv[1] = 1;
                        hsv[2] = minV;
                        // else if (hsv.y < minSaturation) hsv = vec3(0.0, minSaturation, hsv.z);
                    } else if (hsv[1] < minS) {
                        hsv[0] = 0;
                        hsv[1] = minS;
                    }

                    // hsv.x = mod(hsv.x + u_color, 1.0);
                    // if (hsv.x < 0.0) hsv.x += 1.0;
                    hsv[0] = uniforms.u_color + hsv[0] + 1;

                    // gl_FragColor.rgb = convertHSV2RGB(hsl);
                    hsvToRgb(hsv, inOutColor);
                }

                if (enableBrightness) {
                    var brightness = uniforms.u_brightness * 255;
                    // gl_FragColor.rgb = clamp(gl_FragColor.rgb + vec3(u_brightness), vec3(0), vec3(1));
                    // We don't need to clamp because the Uint8ClampedArray does that for us
                    inOutColor[0] += brightness;
                    inOutColor[1] += brightness;
                    inOutColor[2] += brightness;
                }

                // gl_FragColor.rgb *= gl_FragColor.a + epsilon;
                // Now we're doing the reverse, premultiplying by the alpha once again.
                inOutColor[0] *= alpha;
                inOutColor[1] *= alpha;
                inOutColor[2] *= alpha;
            }

            if ((effects & ShaderManager.EFFECT_INFO.ghost.mask) !== 0) {
                // gl_FragColor *= u_ghost
                inOutColor[0] *= uniforms.u_ghost;
                inOutColor[1] *= uniforms.u_ghost;
                inOutColor[2] *= uniforms.u_ghost;
                inOutColor[3] *= uniforms.u_ghost;
            }

            return inOutColor;
        }

        /**
         * Transform a texture coordinate to one that would be select after applying shader effects.
         * @param {Drawable} drawable The drawable whose effects to emulate.
         * @param {twgl.v3} vec The texture coordinate to transform.
         * @param {twgl.v3} dst A place to store the output coordinate.
         * @return {twgl.v3} dst - The coordinate after being transform by effects.
         */

    }, {
        key: 'transformPoint',
        value: function transformPoint(drawable, vec, dst) {
            twgl.v3.copy(vec, dst);

            var effects = drawable.enabledEffects;
            var uniforms = drawable.getUniforms();
            if ((effects & ShaderManager.EFFECT_INFO.mosaic.mask) !== 0) {
                // texcoord0 = fract(u_mosaic * texcoord0);
                dst[0] = uniforms.u_mosaic * dst[0] % 1;
                dst[1] = uniforms.u_mosaic * dst[1] % 1;
            }
            if ((effects & ShaderManager.EFFECT_INFO.pixelate.mask) !== 0) {
                var skinUniforms = drawable.skin.getUniforms();
                // vec2 pixelTexelSize = u_skinSize / u_pixelate;
                var texelX = skinUniforms.u_skinSize[0] / uniforms.u_pixelate;
                var texelY = skinUniforms.u_skinSize[1] / uniforms.u_pixelate;
                // texcoord0 = (floor(texcoord0 * pixelTexelSize) + kCenter) /
                //   pixelTexelSize;
                dst[0] = (Math.floor(dst[0] * texelX) + CENTER_X) / texelX;
                dst[1] = (Math.floor(dst[1] * texelY) + CENTER_Y) / texelY;
            }
            if ((effects & ShaderManager.EFFECT_INFO.whirl.mask) !== 0) {
                // const float kRadius = 0.5;
                var RADIUS = 0.5;
                // vec2 offset = texcoord0 - kCenter;
                var offsetX = dst[0] - CENTER_X;
                var offsetY = dst[1] - CENTER_Y;
                // float offsetMagnitude = length(offset);
                var offsetMagnitude = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
                // float whirlFactor = max(1.0 - (offsetMagnitude / kRadius), 0.0);
                var whirlFactor = Math.max(1.0 - offsetMagnitude / RADIUS, 0.0);
                // float whirlActual = u_whirl * whirlFactor * whirlFactor;
                var whirlActual = uniforms.u_whirl * whirlFactor * whirlFactor;
                // float sinWhirl = sin(whirlActual);
                var sinWhirl = Math.sin(whirlActual);
                // float cosWhirl = cos(whirlActual);
                var cosWhirl = Math.cos(whirlActual);
                // mat2 rotationMatrix = mat2(
                //     cosWhirl, -sinWhirl,
                //     sinWhirl, cosWhirl
                // );
                var rot1 = cosWhirl;
                var rot2 = -sinWhirl;
                var rot3 = sinWhirl;
                var rot4 = cosWhirl;

                // texcoord0 = rotationMatrix * offset + kCenter;
                dst[0] = rot1 * offsetX + rot3 * offsetY + CENTER_X;
                dst[1] = rot2 * offsetX + rot4 * offsetY + CENTER_Y;
            }
            if ((effects & ShaderManager.EFFECT_INFO.fisheye.mask) !== 0) {
                // vec2 vec = (texcoord0 - kCenter) / kCenter;
                var vX = (dst[0] - CENTER_X) / CENTER_X;
                var vY = (dst[1] - CENTER_Y) / CENTER_Y;
                // float vecLength = length(vec);
                var vLength = Math.sqrt(vX * vX + vY * vY);
                // float r = pow(min(vecLength, 1.0), u_fisheye) * max(1.0, vecLength);
                var r = Math.pow(Math.min(vLength, 1), uniforms.u_fisheye) * Math.max(1, vLength);
                // vec2 unit = vec / vecLength;
                var unitX = vX / vLength;
                var unitY = vY / vLength;
                // texcoord0 = kCenter + r * unit * kCenter;
                dst[0] = CENTER_X + r * unitX * CENTER_X;
                dst[1] = CENTER_Y + r * unitY * CENTER_Y;
            }

            return dst;
        }
    }]);

    return EffectTransform;
}();

module.exports = EffectTransform;

/***/ }),

/***/ "./src/PenSkin.js":
/*!************************!*\
  !*** ./src/PenSkin.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var RenderConstants = __webpack_require__(/*! ./RenderConstants */ "./src/RenderConstants.js");
var Skin = __webpack_require__(/*! ./Skin */ "./src/Skin.js");

var ShaderManager = __webpack_require__(/*! ./ShaderManager */ "./src/ShaderManager.js");

/**
 * Attributes to use when drawing with the pen
 * @typedef {object} PenSkin#PenAttributes
 * @property {number} [diameter] - The size (diameter) of the pen.
 * @property {Array<number>} [color4f] - The pen color as an array of [r,g,b,a], each component in the range [0,1].
 */

/**
 * The pen attributes to use when unspecified.
 * @type {PenSkin#PenAttributes}
 * @memberof PenSkin
 * @private
 * @const
 */
var DefaultPenAttributes = {
    color4f: [0, 0, 1, 1],
    diameter: 1
};

/**
 * Reused memory location for storing a premultiplied pen color.
 * @type {FloatArray}
 */
var __premultipliedColor = [0, 0, 0, 0];

var PenSkin = function (_Skin) {
    _inherits(PenSkin, _Skin);

    /**
     * Create a Skin which implements a Scratch pen layer.
     * @param {int} id - The unique ID for this Skin.
     * @param {RenderWebGL} renderer - The renderer which will use this Skin.
     * @extends Skin
     * @listens RenderWebGL#event:NativeSizeChanged
     */
    function PenSkin(id, renderer) {
        _classCallCheck(this, PenSkin);

        /**
         * @private
         * @type {RenderWebGL}
         */
        var _this = _possibleConstructorReturn(this, (PenSkin.__proto__ || Object.getPrototypeOf(PenSkin)).call(this, id));

        _this._renderer = renderer;

        /** @type {Array<number>} */
        _this._size = null;

        /** @type {WebGLFramebuffer} */
        _this._framebuffer = null;

        /** @type {boolean} */
        _this._silhouetteDirty = false;

        /** @type {Uint8Array} */
        _this._silhouettePixels = null;

        /** @type {ImageData} */
        _this._silhouetteImageData = null;

        /** @type {object} */
        _this._lineOnBufferDrawRegionId = {
            enter: function enter() {
                return _this._enterDrawLineOnBuffer();
            },
            exit: function exit() {
                return _this._exitDrawLineOnBuffer();
            }
        };

        /** @type {object} */
        _this._usePenBufferDrawRegionId = {
            enter: function enter() {
                return _this._enterUsePenBuffer();
            },
            exit: function exit() {
                return _this._exitUsePenBuffer();
            }
        };

        /** @type {twgl.BufferInfo} */
        _this._lineBufferInfo = twgl.createBufferInfoFromArrays(_this._renderer.gl, {
            a_position: {
                numComponents: 2,
                data: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]
            }
        });

        var NO_EFFECTS = 0;
        /** @type {twgl.ProgramInfo} */
        _this._lineShader = _this._renderer._shaderManager.getShader(ShaderManager.DRAW_MODE.line, NO_EFFECTS);

        _this.onNativeSizeChanged = _this.onNativeSizeChanged.bind(_this);
        _this._renderer.on(RenderConstants.Events.NativeSizeChanged, _this.onNativeSizeChanged);

        _this._setCanvasSize(renderer.getNativeSize());
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(PenSkin, [{
        key: 'dispose',
        value: function dispose() {
            this._renderer.removeListener(RenderConstants.Events.NativeSizeChanged, this.onNativeSizeChanged);
            this._renderer.gl.deleteTexture(this._texture);
            this._texture = null;
            _get(PenSkin.prototype.__proto__ || Object.getPrototypeOf(PenSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @return {Array<number>} the "native" size, in texels, of this skin. [width, height]
         */

    }, {
        key: 'useNearest',
        value: function useNearest(scale) {
            // Use nearest-neighbor interpolation when scaling up the pen skin-- this matches Scratch 2.0.
            // When scaling it down, use linear interpolation to avoid giving pen lines a "dashed" appearance.
            return Math.max(scale[0], scale[1]) >= 100;
        }

        /**
         * @param {Array<number>} scale The X and Y scaling factors to be used, as percentages of this skin's "native" size.
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given size.
         */
        // eslint-disable-next-line no-unused-vars

    }, {
        key: 'getTexture',
        value: function getTexture(scale) {
            return this._texture;
        }

        /**
         * Clear the pen layer.
         */

    }, {
        key: 'clear',
        value: function clear() {
            this._renderer.enterDrawRegion(this._usePenBufferDrawRegionId);

            /* Reset framebuffer to transparent black */
            var gl = this._renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            this._silhouetteDirty = true;
        }

        /**
         * Draw a point on the pen layer.
         * @param {PenAttributes} penAttributes - how the point should be drawn.
         * @param {number} x - the X coordinate of the point to draw.
         * @param {number} y - the Y coordinate of the point to draw.
         */

    }, {
        key: 'drawPoint',
        value: function drawPoint(penAttributes, x, y) {
            this.drawLine(penAttributes, x, y, x, y);
        }

        /**
         * Draw a line on the pen layer.
         * @param {PenAttributes} penAttributes - how the line should be drawn.
         * @param {number} x0 - the X coordinate of the beginning of the line.
         * @param {number} y0 - the Y coordinate of the beginning of the line.
         * @param {number} x1 - the X coordinate of the end of the line.
         * @param {number} y1 - the Y coordinate of the end of the line.
         */

    }, {
        key: 'drawLine',
        value: function drawLine(penAttributes, x0, y0, x1, y1) {
            // For compatibility with Scratch 2.0, offset pen lines of width 1 and 3 so they're pixel-aligned.
            // See https://github.com/LLK/scratch-render/pull/314
            var diameter = penAttributes.diameter || DefaultPenAttributes.diameter;
            var offset = diameter === 1 || diameter === 3 ? 0.5 : 0;

            this._drawLineOnBuffer(penAttributes, x0 + offset, y0 + offset, x1 + offset, y1 + offset);

            this._silhouetteDirty = true;
        }

        /**
         * Prepare to draw lines in the _lineOnBufferDrawRegionId region.
         */

    }, {
        key: '_enterDrawLineOnBuffer',
        value: function _enterDrawLineOnBuffer() {
            var gl = this._renderer.gl;

            twgl.bindFramebufferInfo(gl, this._framebuffer);

            gl.viewport(0, 0, this._size[0], this._size[1]);

            var currentShader = this._lineShader;
            gl.useProgram(currentShader.program);
            twgl.setBuffersAndAttributes(gl, currentShader, this._lineBufferInfo);

            var uniforms = {
                u_skin: this._texture,
                u_stageSize: this._size
            };

            twgl.setUniforms(currentShader, uniforms);
        }

        /**
         * Return to a base state from _lineOnBufferDrawRegionId.
         */

    }, {
        key: '_exitDrawLineOnBuffer',
        value: function _exitDrawLineOnBuffer() {
            var gl = this._renderer.gl;

            twgl.bindFramebufferInfo(gl, null);
        }

        /**
         * Prepare to do things with this PenSkin's framebuffer
         */

    }, {
        key: '_enterUsePenBuffer',
        value: function _enterUsePenBuffer() {
            twgl.bindFramebufferInfo(this._renderer.gl, this._framebuffer);
        }

        /**
         * Return to a base state
         */

    }, {
        key: '_exitUsePenBuffer',
        value: function _exitUsePenBuffer() {
            twgl.bindFramebufferInfo(this._renderer.gl, null);
        }

        /**
         * Draw a line on the framebuffer.
         * Note that the point coordinates are in the following coordinate space:
         * +y is down, (0, 0) is the center, and the coords range from (-width / 2, -height / 2) to (height / 2, width / 2).
         * @param {PenAttributes} penAttributes - how the line should be drawn.
         * @param {number} x0 - the X coordinate of the beginning of the line.
         * @param {number} y0 - the Y coordinate of the beginning of the line.
         * @param {number} x1 - the X coordinate of the end of the line.
         * @param {number} y1 - the Y coordinate of the end of the line.
         */

    }, {
        key: '_drawLineOnBuffer',
        value: function _drawLineOnBuffer(penAttributes, x0, y0, x1, y1) {
            var gl = this._renderer.gl;

            var currentShader = this._lineShader;

            this._renderer.enterDrawRegion(this._lineOnBufferDrawRegionId);

            // Premultiply pen color by pen transparency
            var penColor = penAttributes.color4f || DefaultPenAttributes.color4f;
            __premultipliedColor[0] = penColor[0] * penColor[3];
            __premultipliedColor[1] = penColor[1] * penColor[3];
            __premultipliedColor[2] = penColor[2] * penColor[3];
            __premultipliedColor[3] = penColor[3];

            // Fun fact: Doing this calculation in the shader has the potential to overflow the floating-point range.
            // 'mediump' precision is only required to have a range up to 2^14 (16384), so any lines longer than 2^7 (128)
            // can overflow that, because you're squaring the operands, and they could end up as "infinity".
            // Even GLSL's `length` function won't save us here:
            // https://asawicki.info/news_1596_watch_out_for_reduced_precision_normalizelength_in_opengl_es
            var lineDiffX = x1 - x0;
            var lineDiffY = y1 - y0;
            var lineLength = Math.sqrt(lineDiffX * lineDiffX + lineDiffY * lineDiffY);

            var uniforms = {
                u_lineColor: __premultipliedColor,
                u_lineThickness: penAttributes.diameter || DefaultPenAttributes.diameter,
                u_lineLength: lineLength,
                u_penPoints: [x0, -y0, lineDiffX, -lineDiffY]
            };

            twgl.setUniforms(currentShader, uniforms);

            twgl.drawBufferInfo(gl, this._lineBufferInfo, gl.TRIANGLES);

            this._silhouetteDirty = true;
        }

        /**
         * React to a change in the renderer's native size.
         * @param {object} event - The change event.
         */

    }, {
        key: 'onNativeSizeChanged',
        value: function onNativeSizeChanged(event) {
            this._setCanvasSize(event.newSize);
        }

        /**
         * Set the size of the pen canvas.
         * @param {Array<int>} canvasSize - the new width and height for the canvas.
         * @private
         */

    }, {
        key: '_setCanvasSize',
        value: function _setCanvasSize(canvasSize) {
            var _canvasSize = _slicedToArray(canvasSize, 2),
                width = _canvasSize[0],
                height = _canvasSize[1];

            this._size = canvasSize;
            this._rotationCenter[0] = width / 2;
            this._rotationCenter[1] = height / 2;

            var gl = this._renderer.gl;

            this._texture = twgl.createTexture(gl, {
                mag: gl.NEAREST,
                min: gl.NEAREST,
                wrap: gl.CLAMP_TO_EDGE,
                width: width,
                height: height
            });

            var attachments = [{
                format: gl.RGBA,
                attachment: this._texture
            }];
            if (this._framebuffer) {
                twgl.resizeFramebufferInfo(gl, this._framebuffer, attachments, width, height);
            } else {
                this._framebuffer = twgl.createFramebufferInfo(gl, attachments, width, height);
            }

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            this._silhouettePixels = new Uint8Array(Math.floor(width * height * 4));
            this._silhouetteImageData = new ImageData(width, height);

            this._silhouetteDirty = true;
        }

        /**
         * If there have been pen operations that have dirtied the canvas, update
         * now before someone wants to use our silhouette.
         */

    }, {
        key: 'updateSilhouette',
        value: function updateSilhouette() {
            if (this._silhouetteDirty) {
                this._renderer.enterDrawRegion(this._usePenBufferDrawRegionId);
                // Sample the framebuffer's pixels into the silhouette instance
                var gl = this._renderer.gl;
                gl.readPixels(0, 0, this._size[0], this._size[1], gl.RGBA, gl.UNSIGNED_BYTE, this._silhouettePixels);

                this._silhouetteImageData.data.set(this._silhouettePixels);
                this._silhouette.update(this._silhouetteImageData, true /* isPremultiplied */);

                this._silhouetteDirty = false;
            }
        }
    }, {
        key: 'size',
        get: function get() {
            return this._size;
        }
    }]);

    return PenSkin;
}(Skin);

module.exports = PenSkin;

/***/ }),

/***/ "./src/Rectangle.js":
/*!**************************!*\
  !*** ./src/Rectangle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
    /**
     * A utility for creating and comparing axis-aligned rectangles.
     * Rectangles are always initialized to the "largest possible rectangle";
     * use one of the init* methods below to set up a particular rectangle.
     * @constructor
     */
    function Rectangle() {
        _classCallCheck(this, Rectangle);

        this.left = -Infinity;
        this.right = Infinity;
        this.bottom = -Infinity;
        this.top = Infinity;
    }

    /**
     * Initialize a Rectangle from given Scratch-coordinate bounds.
     * @param {number} left Left bound of the rectangle.
     * @param {number} right Right bound of the rectangle.
     * @param {number} bottom Bottom bound of the rectangle.
     * @param {number} top Top bound of the rectangle.
     */


    _createClass(Rectangle, [{
        key: "initFromBounds",
        value: function initFromBounds(left, right, bottom, top) {
            this.left = left;
            this.right = right;
            this.bottom = bottom;
            this.top = top;
        }

        /**
         * Initialize a Rectangle to the minimum AABB around a set of points.
         * @param {Array<Array<number>>} points Array of [x, y] points.
         */

    }, {
        key: "initFromPointsAABB",
        value: function initFromPointsAABB(points) {
            this.left = Infinity;
            this.right = -Infinity;
            this.top = -Infinity;
            this.bottom = Infinity;

            for (var i = 0; i < points.length; i++) {
                var x = points[i][0];
                var y = points[i][1];
                if (x < this.left) {
                    this.left = x;
                }
                if (x > this.right) {
                    this.right = x;
                }
                if (y > this.top) {
                    this.top = y;
                }
                if (y < this.bottom) {
                    this.bottom = y;
                }
            }
        }

        /**
         * Initialize a Rectangle to a 1 unit square centered at 0 x 0 transformed
         * by a model matrix.
         * @param {Array.<number>} m A 4x4 matrix to transform the rectangle by.
         * @tutorial Rectangle-AABB-Matrix
         */

    }, {
        key: "initFromModelMatrix",
        value: function initFromModelMatrix(m) {
            // In 2D space, we will soon use the 2x2 "top left" scale and rotation
            // submatrix, while we store and the 1x2 "top right" that position
            // vector.
            var m30 = m[3 * 4 + 0];
            var m31 = m[3 * 4 + 1];

            // "Transform" a (0.5, 0.5) vector by the scale and rotation matrix but
            // sum the absolute of each component instead of use the signed values.
            var x = Math.abs(0.5 * m[0 * 4 + 0]) + Math.abs(0.5 * m[1 * 4 + 0]);
            var y = Math.abs(0.5 * m[0 * 4 + 1]) + Math.abs(0.5 * m[1 * 4 + 1]);

            // And adding them to the position components initializes our Rectangle.
            this.left = -x + m30;
            this.right = x + m30;
            this.top = y + m31;
            this.bottom = -y + m31;
        }

        /**
         * Determine if this Rectangle intersects some other.
         * Note that this is a comparison assuming the Rectangle was
         * initialized with Scratch-space bounds or points.
         * @param {!Rectangle} other Rectangle to check if intersecting.
         * @return {boolean} True if this Rectangle intersects other.
         */

    }, {
        key: "intersects",
        value: function intersects(other) {
            return this.left <= other.right && other.left <= this.right && this.top >= other.bottom && other.top >= this.bottom;
        }

        /**
         * Determine if this Rectangle fully contains some other.
         * Note that this is a comparison assuming the Rectangle was
         * initialized with Scratch-space bounds or points.
         * @param {!Rectangle} other Rectangle to check if fully contained.
         * @return {boolean} True if this Rectangle fully contains other.
         */

    }, {
        key: "contains",
        value: function contains(other) {
            return other.left > this.left && other.right < this.right && other.top < this.top && other.bottom > this.bottom;
        }

        /**
         * Clamp a Rectangle to bounds.
         * @param {number} left Left clamp.
         * @param {number} right Right clamp.
         * @param {number} bottom Bottom clamp.
         * @param {number} top Top clamp.
         */

    }, {
        key: "clamp",
        value: function clamp(left, right, bottom, top) {
            this.left = Math.max(this.left, left);
            this.right = Math.min(this.right, right);
            this.bottom = Math.max(this.bottom, bottom);
            this.top = Math.min(this.top, top);

            this.left = Math.min(this.left, right);
            this.right = Math.max(this.right, left);
            this.bottom = Math.min(this.bottom, top);
            this.top = Math.max(this.top, bottom);
        }

        /**
         * Push out the Rectangle to integer bounds.
         */

    }, {
        key: "snapToInt",
        value: function snapToInt() {
            this.left = Math.floor(this.left);
            this.right = Math.ceil(this.right);
            this.bottom = Math.floor(this.bottom);
            this.top = Math.ceil(this.top);
        }

        /**
         * Compute the intersection of two bounding Rectangles.
         * Could be an impossible box if they don't intersect.
         * @param {Rectangle} a One rectangle
         * @param {Rectangle} b Other rectangle
         * @param {?Rectangle} result A resulting storage rectangle  (safe to pass
         *                            a or b if you want to overwrite one)
         * @returns {Rectangle} resulting rectangle
         */

    }, {
        key: "width",


        /**
         * Width of the Rectangle.
         * @return {number} Width of rectangle.
         */
        get: function get() {
            return Math.abs(this.left - this.right);
        }

        /**
         * Height of the Rectangle.
         * @return {number} Height of rectangle.
         */

    }, {
        key: "height",
        get: function get() {
            return Math.abs(this.top - this.bottom);
        }
    }], [{
        key: "intersect",
        value: function intersect(a, b) {
            var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Rectangle();

            result.left = Math.max(a.left, b.left);
            result.right = Math.min(a.right, b.right);
            result.top = Math.min(a.top, b.top);
            result.bottom = Math.max(a.bottom, b.bottom);

            return result;
        }

        /**
         * Compute the union of two bounding Rectangles.
         * @param {Rectangle} a One rectangle
         * @param {Rectangle} b Other rectangle
         * @param {?Rectangle} result A resulting storage rectangle  (safe to pass
         *                            a or b if you want to overwrite one)
         * @returns {Rectangle} resulting rectangle
         */

    }, {
        key: "union",
        value: function union(a, b) {
            var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Rectangle();

            result.left = Math.min(a.left, b.left);
            result.right = Math.max(a.right, b.right);
            // Scratch Space - +y is up
            result.top = Math.max(a.top, b.top);
            result.bottom = Math.min(a.bottom, b.bottom);
            return result;
        }
    }]);

    return Rectangle;
}();

module.exports = Rectangle;

/***/ }),

/***/ "./src/RenderConstants.js":
/*!********************************!*\
  !*** ./src/RenderConstants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** @module RenderConstants */

/**
 * Various constants meant for use throughout the renderer.
 * @enum
 */
module.exports = {
  /**
   * The ID value to use for "no item" or when an object has been disposed.
   * @const {int}
   */
  ID_NONE: -1,

  /**
   * Optimize for fewer than this number of Drawables sharing the same Skin.
   * Going above this may cause middleware warnings or a performance penalty but should otherwise behave correctly.
   * @const {int}
   */
  SKIN_SHARE_SOFT_LIMIT: 301,

  /**
   * @enum {string}
   */
  Events: {
    /**
     * NativeSizeChanged event
     *
     * @event RenderWebGL#event:NativeSizeChanged
     * @type {object}
     * @property {Array<int>} newSize - the new size of the renderer
     */
    NativeSizeChanged: 'NativeSizeChanged'
  }
};

/***/ }),

/***/ "./src/RenderWebGL.js":
/*!****************************!*\
  !*** ./src/RenderWebGL.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(/*! events */ "events");

var hull = __webpack_require__(/*! hull.js */ "hull.js");
var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var BitmapSkin = __webpack_require__(/*! ./BitmapSkin */ "./src/BitmapSkin.js");
var Drawable = __webpack_require__(/*! ./Drawable */ "./src/Drawable.js");
var Rectangle = __webpack_require__(/*! ./Rectangle */ "./src/Rectangle.js");
var PenSkin = __webpack_require__(/*! ./PenSkin */ "./src/PenSkin.js");
var RenderConstants = __webpack_require__(/*! ./RenderConstants */ "./src/RenderConstants.js");
var ShaderManager = __webpack_require__(/*! ./ShaderManager */ "./src/ShaderManager.js");
var SVGSkin = __webpack_require__(/*! ./SVGSkin */ "./src/SVGSkin.js");
var TextBubbleSkin = __webpack_require__(/*! ./TextBubbleSkin */ "./src/TextBubbleSkin.js");
var EffectTransform = __webpack_require__(/*! ./EffectTransform */ "./src/EffectTransform.js");
var log = __webpack_require__(/*! ./util/log */ "./src/util/log.js");

var __isTouchingDrawablesPoint = twgl.v3.create();
var __candidatesBounds = new Rectangle();
var __fenceBounds = new Rectangle();
var __touchingColor = new Uint8ClampedArray(4);
var __blendColor = new Uint8ClampedArray(4);

// More pixels than this and we give up to the GPU and take the cost of readPixels
// Width * Height * Number of drawables at location
var __cpuTouchingColorPixelCount = 4e4;

/**
 * @callback RenderWebGL#idFilterFunc
 * @param {int} drawableID The ID to filter.
 * @return {bool} True if the ID passes the filter, otherwise false.
 */

/**
 * Maximum touch size for a picking check.
 * @todo Figure out a reasonable max size. Maybe this should be configurable?
 * @type {Array<int>}
 * @memberof RenderWebGL
 */
var MAX_TOUCH_SIZE = [3, 3];

/**
 * Passed to the uniforms for mask in touching color
 */
var MASK_TOUCHING_COLOR_TOLERANCE = 2;

/**
 * Maximum number of pixels in either dimension of "extracted drawable" data
 * @type {int}
 */
var MAX_EXTRACTED_DRAWABLE_DIMENSION = 2048;

/**
 * Determines if the mask color is "close enough" (only test the 6 top bits for
 * each color).  These bit masks are what scratch 2 used to use, so we do the same.
 * @param {Uint8Array} a A color3b or color4b value.
 * @param {Uint8Array} b A color3b or color4b value.
 * @returns {boolean} If the colors match within the parameters.
 */
var maskMatches = function maskMatches(a, b) {
    return (
        // has some non-alpha component to test against
        a[3] > 0 && (a[0] & 252) === (b[0] & 252) && (a[1] & 252) === (b[1] & 252) && (a[2] & 252) === (b[2] & 252)
    );
};

/**
 * Determines if the given color is "close enough" (only test the 5 top bits for
 * red and green, 4 bits for blue).  These bit masks are what scratch 2 used to use,
 * so we do the same.
 * @param {Uint8Array} a A color3b or color4b value.
 * @param {Uint8Array} b A color3b or color4b value / or a larger array when used with offsets
 * @param {number} offset An offset into the `b` array, which lets you use a larger array to test
 *                  multiple values at the same time.
 * @returns {boolean} If the colors match within the parameters.
 */
var colorMatches = function colorMatches(a, b, offset) {
    return (a[0] & 248) === (b[offset + 0] & 248) && (a[1] & 248) === (b[offset + 1] & 248) && (a[2] & 240) === (b[offset + 2] & 240);
};

/**
 * Sprite Fencing - The number of pixels a sprite is required to leave remaining
 * onscreen around the edge of the staging area.
 * @type {number}
 */
var FENCE_WIDTH = 15;

var RenderWebGL = function (_EventEmitter) {
    _inherits(RenderWebGL, _EventEmitter);

    _createClass(RenderWebGL, null, [{
        key: 'isSupported',

        /**
         * Check if this environment appears to support this renderer before attempting to create an instance.
         * Catching an exception from the constructor is also a valid way to test for (lack of) support.
         * @param {canvas} [optCanvas] - An optional canvas to use for the test. Otherwise a temporary canvas will be used.
         * @returns {boolean} - True if this environment appears to support this renderer, false otherwise.
         */
        value: function isSupported(optCanvas) {
            try {
                // Create the context the same way that the constructor will: attributes may make the difference.
                return !!RenderWebGL._getContext(optCanvas || document.createElement('canvas'));
            } catch (e) {
                return false;
            }
        }

        /**
         * Ask TWGL to create a rendering context with the attributes used by this renderer.
         * @param {canvas} canvas - attach the context to this canvas.
         * @returns {WebGLRenderingContext} - a TWGL rendering context (backed by either WebGL 1.0 or 2.0).
         * @private
         */

    }, {
        key: '_getContext',
        value: function _getContext(canvas) {
            var contextAttribs = { alpha: false, stencil: true, antialias: false };
            // getWebGLContext = try WebGL 1.0 only
            // getContext = try WebGL 2.0 and if that doesn't work, try WebGL 1.0
            // getWebGLContext || getContext = try WebGL 1.0 and if that doesn't work, try WebGL 2.0
            return twgl.getWebGLContext(canvas, contextAttribs) || twgl.getContext(canvas, contextAttribs);
        }

        /**
         * Create a renderer for drawing Scratch sprites to a canvas using WebGL.
         * Coordinates will default to Scratch 2.0 values if unspecified.
         * The stage's "native" size will be calculated from the these coordinates.
         * For example, the defaults result in a native size of 480x360.
         * Queries such as "touching color?" will always execute at the native size.
         * @see RenderWebGL#setStageSize
         * @see RenderWebGL#resize
         * @param {canvas} canvas The canvas to draw onto.
         * @param {int} [xLeft=-240] The x-coordinate of the left edge.
         * @param {int} [xRight=240] The x-coordinate of the right edge.
         * @param {int} [yBottom=-180] The y-coordinate of the bottom edge.
         * @param {int} [yTop=180] The y-coordinate of the top edge.
         * @constructor
         * @listens RenderWebGL#event:NativeSizeChanged
         */

    }]);

    function RenderWebGL(canvas, xLeft, xRight, yBottom, yTop) {
        _classCallCheck(this, RenderWebGL);

        /** @type {WebGLRenderingContext} */
        var _this = _possibleConstructorReturn(this, (RenderWebGL.__proto__ || Object.getPrototypeOf(RenderWebGL)).call(this));

        var gl = _this._gl = RenderWebGL._getContext(canvas);
        if (!gl) {
            throw new Error('Could not get WebGL context: this browser or environment may not support WebGL.');
        }

        /** @type {RenderWebGL.UseGpuModes} */
        _this._useGpuMode = RenderWebGL.UseGpuModes.Automatic;

        /** @type {Drawable[]} */
        _this._allDrawables = [];

        /** @type {Skin[]} */
        _this._allSkins = [];

        /** @type {Array<int>} */
        _this._drawList = [];

        // A list of layer group names in the order they should appear
        // from furthest back to furthest in front.
        /** @type {Array<String>} */
        _this._groupOrdering = [];

        /**
         * @typedef LayerGroup
         * @property {int} groupIndex The relative position of this layer group in the group ordering
         * @property {int} drawListOffset The absolute position of this layer group in the draw list
         * This number gets updated as drawables get added to or deleted from the draw list.
         */

        // Map of group name to layer group
        /** @type {Object.<string, LayerGroup>} */
        _this._layerGroups = {};

        /** @type {int} */
        _this._nextDrawableId = RenderConstants.ID_NONE + 1;

        /** @type {int} */
        _this._nextSkinId = RenderConstants.ID_NONE + 1;

        /** @type {module:twgl/m4.Mat4} */
        _this._projection = twgl.m4.identity();

        /** @type {ShaderManager} */
        _this._shaderManager = new ShaderManager(gl);

        /** @type {HTMLCanvasElement} */
        _this._tempCanvas = document.createElement('canvas');

        /** @type {any} */
        _this._regionId = null;

        /** @type {function} */
        _this._exitRegion = null;

        /** @type {object} */
        _this._backgroundDrawRegionId = {
            enter: function enter() {
                return _this._enterDrawBackground();
            },
            exit: function exit() {
                return _this._exitDrawBackground();
            }
        };

        /** @type {Array.<snapshotCallback>} */
        _this._snapshotCallbacks = [];

        /** @type {Array<number>} */
        // Don't set this directly-- use setBackgroundColor so it stays in sync with _backgroundColor3b
        _this._backgroundColor4f = [0, 0, 0, 1];

        /** @type {Uint8ClampedArray} */
        // Don't set this directly-- use setBackgroundColor so it stays in sync with _backgroundColor4f
        _this._backgroundColor3b = new Uint8ClampedArray(3);

        _this._createGeometry();

        _this.on(RenderConstants.Events.NativeSizeChanged, _this.onNativeSizeChanged);

        _this.setBackgroundColor(1, 1, 1);
        _this.setStageSize(xLeft || -240, xRight || 240, yBottom || -180, yTop || 180);
        _this.resize(_this._nativeSize[0], _this._nativeSize[1]);

        gl.disable(gl.DEPTH_TEST);
        /** @todo disable when no partial transparency? */
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        return _this;
    }

    /**
     * @returns {WebGLRenderingContext} the WebGL rendering context associated with this renderer.
     */


    _createClass(RenderWebGL, [{
        key: 'resize',


        /**
         * Set the physical size of the stage in device-independent pixels.
         * This will be multiplied by the device's pixel ratio on high-DPI displays.
         * @param {int} pixelsWide The desired width in device-independent pixels.
         * @param {int} pixelsTall The desired height in device-independent pixels.
         */
        value: function resize(pixelsWide, pixelsTall) {
            var canvas = this._gl.canvas;

            var pixelRatio = window.devicePixelRatio || 1;
            var newWidth = pixelsWide * pixelRatio;
            var newHeight = pixelsTall * pixelRatio;

            // Certain operations, such as moving the color picker, call `resize` once per frame, even though the canvas
            // size doesn't change. To avoid unnecessary canvas updates, check that we *really* need to resize the canvas.
            if (canvas.width !== newWidth || canvas.height !== newHeight) {
                canvas.width = newWidth;
                canvas.height = newHeight;
                // Resizing the canvas causes it to be cleared, so redraw it.
                this.draw();
            }
        }

        /**
         * Set the background color for the stage. The stage will be cleared with this
         * color each frame.
         * @param {number} red The red component for the background.
         * @param {number} green The green component for the background.
         * @param {number} blue The blue component for the background.
         */

    }, {
        key: 'setBackgroundColor',
        value: function setBackgroundColor(red, green, blue) {
            this._backgroundColor4f[0] = red;
            this._backgroundColor4f[1] = green;
            this._backgroundColor4f[2] = blue;

            this._backgroundColor3b[0] = red * 255;
            this._backgroundColor3b[1] = green * 255;
            this._backgroundColor3b[2] = blue * 255;
        }

        /**
         * Tell the renderer to draw various debug information to the provided canvas
         * during certain operations.
         * @param {canvas} canvas The canvas to use for debug output.
         */

    }, {
        key: 'setDebugCanvas',
        value: function setDebugCanvas(canvas) {
            this._debugCanvas = canvas;
        }

        /**
         * Control the use of the GPU or CPU paths in `isTouchingColor`.
         * @param {RenderWebGL.UseGpuModes} useGpuMode - automatically decide, force CPU, or force GPU.
         */

    }, {
        key: 'setUseGpuMode',
        value: function setUseGpuMode(useGpuMode) {
            this._useGpuMode = useGpuMode;
        }

        /**
         * Set logical size of the stage in Scratch units.
         * @param {int} xLeft The left edge's x-coordinate. Scratch 2 uses -240.
         * @param {int} xRight The right edge's x-coordinate. Scratch 2 uses 240.
         * @param {int} yBottom The bottom edge's y-coordinate. Scratch 2 uses -180.
         * @param {int} yTop The top edge's y-coordinate. Scratch 2 uses 180.
         */

    }, {
        key: 'setStageSize',
        value: function setStageSize(xLeft, xRight, yBottom, yTop) {
            this._xLeft = xLeft;
            this._xRight = xRight;
            this._yBottom = yBottom;
            this._yTop = yTop;

            // swap yBottom & yTop to fit Scratch convention of +y=up
            this._projection = twgl.m4.ortho(xLeft, xRight, yBottom, yTop, -1, 1);

            this._setNativeSize(Math.abs(xRight - xLeft), Math.abs(yBottom - yTop));
        }

        /**
         * @return {Array<int>} the "native" size of the stage, which is used for pen, query renders, etc.
         */

    }, {
        key: 'getNativeSize',
        value: function getNativeSize() {
            return [this._nativeSize[0], this._nativeSize[1]];
        }

        /**
         * Set the "native" size of the stage, which is used for pen, query renders, etc.
         * @param {int} width - the new width to set.
         * @param {int} height - the new height to set.
         * @private
         * @fires RenderWebGL#event:NativeSizeChanged
         */

    }, {
        key: '_setNativeSize',
        value: function _setNativeSize(width, height) {
            this._nativeSize = [width, height];
            this.emit(RenderConstants.Events.NativeSizeChanged, { newSize: this._nativeSize });
        }

        /**
         * Create a new bitmap skin from a snapshot of the provided bitmap data.
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - new contents for this skin.
         * @param {!int} [costumeResolution=1] - The resolution to use for this bitmap.
         * @param {?Array<number>} [rotationCenter] Optional: rotation center of the skin. If not supplied, the center of
         * the skin will be used.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createBitmapSkin',
        value: function createBitmapSkin(bitmapData, costumeResolution, rotationCenter) {
            var skinId = this._nextSkinId++;
            var newSkin = new BitmapSkin(skinId, this);
            newSkin.setBitmap(bitmapData, costumeResolution, rotationCenter);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Create a new SVG skin.
         * @param {!string} svgData - new SVG to use.
         * @param {?Array<number>} rotationCenter Optional: rotation center of the skin. If not supplied, the center of the
         * skin will be used
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createSVGSkin',
        value: function createSVGSkin(svgData, rotationCenter) {
            var skinId = this._nextSkinId++;
            var newSkin = new SVGSkin(skinId, this);
            newSkin.setSVG(svgData, rotationCenter);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Create a new PenSkin - a skin which implements a Scratch pen layer.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createPenSkin',
        value: function createPenSkin() {
            var skinId = this._nextSkinId++;
            var newSkin = new PenSkin(skinId, this);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Create a new SVG skin using the text bubble svg creator. The rotation center
         * is always placed at the top left.
         * @param {!string} type - either "say" or "think".
         * @param {!string} text - the text for the bubble.
         * @param {!boolean} pointsLeft - which side the bubble is pointing.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createTextSkin',
        value: function createTextSkin(type, text, pointsLeft) {
            var skinId = this._nextSkinId++;
            var newSkin = new TextBubbleSkin(skinId, this);
            newSkin.setTextBubble(type, text, pointsLeft);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Update an existing SVG skin, or create an SVG skin if the previous skin was not SVG.
         * @param {!int} skinId the ID for the skin to change.
         * @param {!string} svgData - new SVG to use.
         * @param {?Array<number>} rotationCenter Optional: rotation center of the skin. If not supplied, the center of the
         * skin will be used
         */

    }, {
        key: 'updateSVGSkin',
        value: function updateSVGSkin(skinId, svgData, rotationCenter) {
            if (this._allSkins[skinId] instanceof SVGSkin) {
                this._allSkins[skinId].setSVG(svgData, rotationCenter);
                return;
            }

            var newSkin = new SVGSkin(skinId, this);
            newSkin.setSVG(svgData, rotationCenter);
            this._reskin(skinId, newSkin);
        }

        /**
         * Update an existing bitmap skin, or create a bitmap skin if the previous skin was not bitmap.
         * @param {!int} skinId the ID for the skin to change.
         * @param {!ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imgData - new contents for this skin.
         * @param {!number} bitmapResolution - the resolution scale for a bitmap costume.
         * @param {?Array<number>} rotationCenter Optional: rotation center of the skin. If not supplied, the center of the
         * skin will be used
         */

    }, {
        key: 'updateBitmapSkin',
        value: function updateBitmapSkin(skinId, imgData, bitmapResolution, rotationCenter) {
            if (this._allSkins[skinId] instanceof BitmapSkin) {
                this._allSkins[skinId].setBitmap(imgData, bitmapResolution, rotationCenter);
                return;
            }

            var newSkin = new BitmapSkin(skinId, this);
            newSkin.setBitmap(imgData, bitmapResolution, rotationCenter);
            this._reskin(skinId, newSkin);
        }
    }, {
        key: '_reskin',
        value: function _reskin(skinId, newSkin) {
            var oldSkin = this._allSkins[skinId];
            this._allSkins[skinId] = newSkin;

            // Tell drawables to update
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._allDrawables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var drawable = _step.value;

                    if (drawable && drawable.skin === oldSkin) {
                        drawable.skin = newSkin;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            oldSkin.dispose();
        }

        /**
         * Update a skin using the text bubble svg creator.
         * @param {!int} skinId the ID for the skin to change.
         * @param {!string} type - either "say" or "think".
         * @param {!string} text - the text for the bubble.
         * @param {!boolean} pointsLeft - which side the bubble is pointing.
         */

    }, {
        key: 'updateTextSkin',
        value: function updateTextSkin(skinId, type, text, pointsLeft) {
            if (this._allSkins[skinId] instanceof TextBubbleSkin) {
                this._allSkins[skinId].setTextBubble(type, text, pointsLeft);
                return;
            }

            var newSkin = new TextBubbleSkin(skinId, this);
            newSkin.setTextBubble(type, text, pointsLeft);
            this._reskin(skinId, newSkin);
        }

        /**
         * Destroy an existing skin. Do not use the skin or its ID after calling this.
         * @param {!int} skinId - The ID of the skin to destroy.
         */

    }, {
        key: 'destroySkin',
        value: function destroySkin(skinId) {
            var oldSkin = this._allSkins[skinId];
            oldSkin.dispose();
            delete this._allSkins[skinId];
        }

        /**
         * Create a new Drawable and add it to the scene.
         * @param {string} group Layer group to add the drawable to
         * @returns {int} The ID of the new Drawable.
         */

    }, {
        key: 'createDrawable',
        value: function createDrawable(group) {
            if (!group || !Object.prototype.hasOwnProperty.call(this._layerGroups, group)) {
                log.warn('Cannot create a drawable without a known layer group');
                return;
            }
            var drawableID = this._nextDrawableId++;
            var drawable = new Drawable(drawableID);
            this._allDrawables[drawableID] = drawable;
            this._addToDrawList(drawableID, group);

            drawable.skin = null;

            return drawableID;
        }

        /**
         * Set the layer group ordering for the renderer.
         * @param {Array<string>} groupOrdering The ordered array of layer group
         * names
         */

    }, {
        key: 'setLayerGroupOrdering',
        value: function setLayerGroupOrdering(groupOrdering) {
            this._groupOrdering = groupOrdering;
            for (var i = 0; i < this._groupOrdering.length; i++) {
                this._layerGroups[this._groupOrdering[i]] = {
                    groupIndex: i,
                    drawListOffset: 0
                };
            }
        }
    }, {
        key: '_addToDrawList',
        value: function _addToDrawList(drawableID, group) {
            var currentLayerGroup = this._layerGroups[group];
            var currentGroupOrderingIndex = currentLayerGroup.groupIndex;

            var drawListOffset = this._endIndexForKnownLayerGroup(currentLayerGroup);
            this._drawList.splice(drawListOffset, 0, drawableID);

            this._updateOffsets('add', currentGroupOrderingIndex);
        }
    }, {
        key: '_updateOffsets',
        value: function _updateOffsets(updateType, currentGroupOrderingIndex) {
            for (var i = currentGroupOrderingIndex + 1; i < this._groupOrdering.length; i++) {
                var laterGroupName = this._groupOrdering[i];
                if (updateType === 'add') {
                    this._layerGroups[laterGroupName].drawListOffset++;
                } else if (updateType === 'delete') {
                    this._layerGroups[laterGroupName].drawListOffset--;
                }
            }
        }
    }, {
        key: '_endIndexForKnownLayerGroup',


        // Given a layer group, return the index where it ends (non-inclusive),
        // e.g. the returned index does not have a drawable from this layer group in it)
        value: function _endIndexForKnownLayerGroup(layerGroup) {
            var groupIndex = layerGroup.groupIndex;
            if (groupIndex === this._groupOrdering.length - 1) {
                return this._drawList.length;
            }
            return this._layerGroups[this._groupOrdering[groupIndex + 1]].drawListOffset;
        }

        /**
         * Destroy a Drawable, removing it from the scene.
         * @param {int} drawableID The ID of the Drawable to remove.
         * @param {string} group Group name that the drawable belongs to
         */

    }, {
        key: 'destroyDrawable',
        value: function destroyDrawable(drawableID, group) {
            if (!group || !Object.prototype.hasOwnProperty.call(this._layerGroups, group)) {
                log.warn('Cannot destroy drawable without known layer group.');
                return;
            }
            var drawable = this._allDrawables[drawableID];
            drawable.dispose();
            delete this._allDrawables[drawableID];

            var currentLayerGroup = this._layerGroups[group];
            var endIndex = this._endIndexForKnownLayerGroup(currentLayerGroup);

            var index = currentLayerGroup.drawListOffset;
            while (index < endIndex) {
                if (this._drawList[index] === drawableID) {
                    break;
                }
                index++;
            }
            if (index < endIndex) {
                this._drawList.splice(index, 1);
                this._updateOffsets('delete', currentLayerGroup.groupIndex);
            } else {
                log.warn('Could not destroy drawable that could not be found in layer group.');
                return;
            }
        }

        /**
         * Returns the position of the given drawableID in the draw list. This is
         * the absolute position irrespective of layer group.
         * @param {number} drawableID The drawable ID to find.
         * @return {number} The postion of the given drawable ID.
         */

    }, {
        key: 'getDrawableOrder',
        value: function getDrawableOrder(drawableID) {
            return this._drawList.indexOf(drawableID);
        }

        /**
         * Set a drawable's order in the drawable list (effectively, z/layer).
         * Can be used to move drawables to absolute positions in the list,
         * or relative to their current positions.
         * "go back N layers": setDrawableOrder(id, -N, true, 1); (assuming stage at 0).
         * "go to back": setDrawableOrder(id, 1); (assuming stage at 0).
         * "go to front": setDrawableOrder(id, Infinity);
         * @param {int} drawableID ID of Drawable to reorder.
         * @param {number} order New absolute order or relative order adjusment.
         * @param {string=} group Name of layer group drawable belongs to.
         * Reordering will not take place if drawable cannot be found within the bounds
         * of the layer group.
         * @param {boolean=} optIsRelative If set, `order` refers to a relative change.
         * @param {number=} optMin If set, order constrained to be at least `optMin`.
         * @return {?number} New order if changed, or null.
         */

    }, {
        key: 'setDrawableOrder',
        value: function setDrawableOrder(drawableID, order, group, optIsRelative, optMin) {
            if (!group || !Object.prototype.hasOwnProperty.call(this._layerGroups, group)) {
                log.warn('Cannot set the order of a drawable without a known layer group.');
                return;
            }

            var currentLayerGroup = this._layerGroups[group];
            var startIndex = currentLayerGroup.drawListOffset;
            var endIndex = this._endIndexForKnownLayerGroup(currentLayerGroup);

            var oldIndex = startIndex;
            while (oldIndex < endIndex) {
                if (this._drawList[oldIndex] === drawableID) {
                    break;
                }
                oldIndex++;
            }

            if (oldIndex < endIndex) {
                // Remove drawable from the list.
                if (order === 0) {
                    return oldIndex;
                }

                var _ = this._drawList.splice(oldIndex, 1)[0];
                // Determine new index.
                var newIndex = order;
                if (optIsRelative) {
                    newIndex += oldIndex;
                }

                var possibleMin = (optMin || 0) + startIndex;
                var min = possibleMin >= startIndex && possibleMin < endIndex ? possibleMin : startIndex;
                newIndex = Math.max(newIndex, min);

                newIndex = Math.min(newIndex, endIndex);

                // Insert at new index.
                this._drawList.splice(newIndex, 0, drawableID);
                return newIndex;
            }

            return null;
        }

        /**
         * Draw all current drawables and present the frame on the canvas.
         */

    }, {
        key: 'draw',
        value: function draw() {
            this._doExitDrawRegion();

            var gl = this._gl;

            twgl.bindFramebufferInfo(gl, null);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clearColor.apply(gl, _toConsumableArray(this._backgroundColor4f));
            gl.clear(gl.COLOR_BUFFER_BIT);

            this._drawThese(this._drawList, ShaderManager.DRAW_MODE.default, this._projection, {
                framebufferWidth: gl.canvas.width,
                framebufferHeight: gl.canvas.height
            });
            if (this._snapshotCallbacks.length > 0) {
                var snapshot = gl.canvas.toDataURL();
                this._snapshotCallbacks.forEach(function (cb) {
                    return cb(snapshot);
                });
                this._snapshotCallbacks = [];
            }
        }

        /**
         * Get the precise bounds for a Drawable.
         * @param {int} drawableID ID of Drawable to get bounds for.
         * @return {object} Bounds for a tight box around the Drawable.
         */

    }, {
        key: 'getBounds',
        value: function getBounds(drawableID) {
            var drawable = this._allDrawables[drawableID];
            // Tell the Drawable about its updated convex hull, if necessary.
            if (drawable.needsConvexHullPoints()) {
                var points = this._getConvexHullPointsForDrawable(drawableID);
                drawable.setConvexHullPoints(points);
            }
            var bounds = drawable.getFastBounds();
            // In debug mode, draw the bounds.
            if (this._debugCanvas) {
                var gl = this._gl;
                this._debugCanvas.width = gl.canvas.width;
                this._debugCanvas.height = gl.canvas.height;
                var context = this._debugCanvas.getContext('2d');
                context.drawImage(gl.canvas, 0, 0);
                context.strokeStyle = '#FF0000';
                var pr = window.devicePixelRatio;
                context.strokeRect(pr * (bounds.left + this._nativeSize[0] / 2), pr * (-bounds.top + this._nativeSize[1] / 2), pr * (bounds.right - bounds.left), pr * (-bounds.bottom + bounds.top));
            }
            return bounds;
        }

        /**
         * Get the precise bounds for a Drawable around the top slice.
         * Used for positioning speech bubbles more closely to the sprite.
         * @param {int} drawableID ID of Drawable to get bubble bounds for.
         * @return {object} Bounds for a tight box around the Drawable top slice.
         */

    }, {
        key: 'getBoundsForBubble',
        value: function getBoundsForBubble(drawableID) {
            var drawable = this._allDrawables[drawableID];
            // Tell the Drawable about its updated convex hull, if necessary.
            if (drawable.needsConvexHullPoints()) {
                var points = this._getConvexHullPointsForDrawable(drawableID);
                drawable.setConvexHullPoints(points);
            }
            var bounds = drawable.getBoundsForBubble();
            // In debug mode, draw the bounds.
            if (this._debugCanvas) {
                var gl = this._gl;
                this._debugCanvas.width = gl.canvas.width;
                this._debugCanvas.height = gl.canvas.height;
                var context = this._debugCanvas.getContext('2d');
                context.drawImage(gl.canvas, 0, 0);
                context.strokeStyle = '#FF0000';
                var pr = window.devicePixelRatio;
                context.strokeRect(pr * (bounds.left + this._nativeSize[0] / 2), pr * (-bounds.top + this._nativeSize[1] / 2), pr * (bounds.right - bounds.left), pr * (-bounds.bottom + bounds.top));
            }
            return bounds;
        }

        /**
         * Get the current skin (costume) size of a Drawable.
         * @param {int} drawableID The ID of the Drawable to measure.
         * @return {Array<number>} Skin size, width and height.
         */

    }, {
        key: 'getCurrentSkinSize',
        value: function getCurrentSkinSize(drawableID) {
            var drawable = this._allDrawables[drawableID];
            return this.getSkinSize(drawable.skin.id);
        }

        /**
         * Get the size of a skin by ID.
         * @param {int} skinID The ID of the Skin to measure.
         * @return {Array<number>} Skin size, width and height.
         */

    }, {
        key: 'getSkinSize',
        value: function getSkinSize(skinID) {
            var skin = this._allSkins[skinID];
            return skin.size;
        }

        /**
         * Get the rotation center of a skin by ID.
         * @param {int} skinID The ID of the Skin
         * @return {Array<number>} The rotationCenterX and rotationCenterY
         */

    }, {
        key: 'getSkinRotationCenter',
        value: function getSkinRotationCenter(skinID) {
            var skin = this._allSkins[skinID];
            return skin.calculateRotationCenter();
        }

        /**
         * Check if a particular Drawable is touching a particular color.
         * Unlike touching drawable, if the "tester" is invisble, we will still test.
         * @param {int} drawableID The ID of the Drawable to check.
         * @param {Array<int>} color3b Test if the Drawable is touching this color.
         * @param {Array<int>} [mask3b] Optionally mask the check to this part of Drawable.
         * @returns {boolean} True iff the Drawable is touching the color.
         */

    }, {
        key: 'isTouchingColor',
        value: function isTouchingColor(drawableID, color3b, mask3b) {
            var candidates = this._candidatesTouching(drawableID, this._visibleDrawList);

            var bounds = void 0;
            if (colorMatches(color3b, this._backgroundColor3b, 0)) {
                // If the color we're checking for is the background color, don't confine the check to
                // candidate drawables' bounds--since the background spans the entire stage, we must check
                // everything that lies inside the drawable.
                bounds = this._touchingBounds(drawableID);
                // e.g. empty costume, or off the stage
                if (bounds === null) return false;
            } else if (candidates.length === 0) {
                // If not checking for the background color, we can return early if there are no candidate drawables.
                return false;
            } else {
                bounds = this._candidatesBounds(candidates);
            }

            var maxPixelsForCPU = this._getMaxPixelsForCPU();

            var debugCanvasContext = this._debugCanvas && this._debugCanvas.getContext('2d');
            if (debugCanvasContext) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
            }

            // if there are just too many pixels to CPU render efficiently, we need to let readPixels happen
            if (bounds.width * bounds.height * (candidates.length + 1) >= maxPixelsForCPU) {
                this._isTouchingColorGpuStart(drawableID, candidates.map(function (_ref) {
                    var id = _ref.id;
                    return id;
                }).reverse(), bounds, color3b, mask3b);
            }

            var drawable = this._allDrawables[drawableID];
            var point = __isTouchingDrawablesPoint;
            var color = __touchingColor;
            var hasMask = Boolean(mask3b);

            drawable.updateCPURenderAttributes();

            // Masked drawable ignores ghost effect
            var effectMask = ~ShaderManager.EFFECT_INFO.ghost.mask;

            // Scratch Space - +y is top
            for (var y = bounds.bottom; y <= bounds.top; y++) {
                if (bounds.width * (y - bounds.bottom) * (candidates.length + 1) >= maxPixelsForCPU) {
                    return this._isTouchingColorGpuFin(bounds, color3b, y - bounds.bottom);
                }
                for (var x = bounds.left; x <= bounds.right; x++) {
                    point[1] = y;
                    point[0] = x;
                    // if we use a mask, check our sample color...
                    if (hasMask ? maskMatches(Drawable.sampleColor4b(point, drawable, color, effectMask), mask3b) : drawable.isTouching(point)) {
                        RenderWebGL.sampleColor3b(point, candidates, color);
                        if (debugCanvasContext) {
                            debugCanvasContext.fillStyle = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
                            debugCanvasContext.fillRect(x - bounds.left, bounds.bottom - y, 1, 1);
                        }
                        // ...and the target color is drawn at this pixel
                        if (colorMatches(color, color3b, 0)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    }, {
        key: '_getMaxPixelsForCPU',
        value: function _getMaxPixelsForCPU() {
            switch (this._useGpuMode) {
                case RenderWebGL.UseGpuModes.ForceCPU:
                    return Infinity;
                case RenderWebGL.UseGpuModes.ForceGPU:
                    return 0;
                case RenderWebGL.UseGpuModes.Automatic:
                default:
                    return __cpuTouchingColorPixelCount;
            }
        }
    }, {
        key: '_enterDrawBackground',
        value: function _enterDrawBackground() {
            var gl = this.gl;
            var currentShader = this._shaderManager.getShader(ShaderManager.DRAW_MODE.background, 0);
            gl.disable(gl.BLEND);
            gl.useProgram(currentShader.program);
            twgl.setBuffersAndAttributes(gl, currentShader, this._bufferInfo);
        }
    }, {
        key: '_exitDrawBackground',
        value: function _exitDrawBackground() {
            var gl = this.gl;
            gl.enable(gl.BLEND);
        }
    }, {
        key: '_isTouchingColorGpuStart',
        value: function _isTouchingColorGpuStart(drawableID, candidateIDs, bounds, color3b, mask3b) {
            this._doExitDrawRegion();

            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            // Limit size of viewport to the bounds around the target Drawable,
            // and create the projection matrix for the draw.
            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            // Clear the query buffer to fully transparent. This will be the color of pixels that fail the stencil test.
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

            var extraUniforms = void 0;
            if (mask3b) {
                extraUniforms = {
                    u_colorMask: [mask3b[0] / 255, mask3b[1] / 255, mask3b[2] / 255],
                    u_colorMaskTolerance: MASK_TOUCHING_COLOR_TOLERANCE / 255
                };
            }

            try {
                // Using the stencil buffer, mask out the drawing to either the drawable's alpha channel
                // or pixels of the drawable which match the mask color, depending on whether a mask color is given.
                // Masked-out pixels will not be checked.
                gl.enable(gl.STENCIL_TEST);
                gl.stencilFunc(gl.ALWAYS, 1, 1);
                gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
                gl.colorMask(false, false, false, false);
                this._drawThese([drawableID], mask3b ? ShaderManager.DRAW_MODE.colorMask : ShaderManager.DRAW_MODE.silhouette, projection, {
                    extraUniforms: extraUniforms,
                    ignoreVisibility: true, // Touching color ignores sprite visibility,
                    effectMask: ~ShaderManager.EFFECT_INFO.ghost.mask
                });

                gl.stencilFunc(gl.EQUAL, 1, 1);
                gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
                gl.colorMask(true, true, true, true);

                // Draw the background as a quad. Drawing a background with gl.clear will not mask to the stenciled area.
                this.enterDrawRegion(this._backgroundDrawRegionId);

                var uniforms = {
                    u_backgroundColor: this._backgroundColor4f
                };

                var currentShader = this._shaderManager.getShader(ShaderManager.DRAW_MODE.background, 0);
                twgl.setUniforms(currentShader, uniforms);
                twgl.drawBufferInfo(gl, this._bufferInfo, gl.TRIANGLES);

                // Draw the candidate drawables on top of the background.
                this._drawThese(candidateIDs, ShaderManager.DRAW_MODE.default, projection, { idFilterFunc: function idFilterFunc(testID) {
                        return testID !== drawableID;
                    } });
            } finally {
                gl.colorMask(true, true, true, true);
                gl.disable(gl.STENCIL_TEST);
                this._doExitDrawRegion();
            }
        }
    }, {
        key: '_isTouchingColorGpuFin',
        value: function _isTouchingColorGpuFin(bounds, color3b, stop) {
            var gl = this._gl;
            var pixels = new Uint8Array(Math.floor(bounds.width * (bounds.height - stop) * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height - stop, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

            if (this._debugCanvas) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
                var context = this._debugCanvas.getContext('2d');
                var imageData = context.getImageData(0, 0, bounds.width, bounds.height - stop);
                imageData.data.set(pixels);
                context.putImageData(imageData, 0, 0);
            }

            for (var pixelBase = 0; pixelBase < pixels.length; pixelBase += 4) {
                // Transparent pixels are masked (either by the drawable's alpha channel or color mask).
                if (pixels[pixelBase + 3] !== 0 && colorMatches(color3b, pixels, pixelBase)) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Check if a particular Drawable is touching any in a set of Drawables.
         * @param {int} drawableID The ID of the Drawable to check.
         * @param {?Array<int>} candidateIDs The Drawable IDs to check, otherwise all visible drawables in the renderer
         * @returns {boolean} True if the Drawable is touching one of candidateIDs.
         */

    }, {
        key: 'isTouchingDrawables',
        value: function isTouchingDrawables(drawableID) {
            var _this2 = this;

            var candidateIDs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._drawList;

            var candidates = this._candidatesTouching(drawableID,
            // even if passed an invisible drawable, we will NEVER touch it!
            candidateIDs.filter(function (id) {
                return _this2._allDrawables[id]._visible;
            }));
            // if we are invisble we don't touch anything.
            if (candidates.length === 0 || !this._allDrawables[drawableID]._visible) {
                return false;
            }

            // Get the union of all the candidates intersections.
            var bounds = this._candidatesBounds(candidates);

            var drawable = this._allDrawables[drawableID];
            var point = __isTouchingDrawablesPoint;

            drawable.updateCPURenderAttributes();

            // This is an EXTREMELY brute force collision detector, but it is
            // still faster than asking the GPU to give us the pixels.
            for (var x = bounds.left; x <= bounds.right; x++) {
                // Scratch Space - +y is top
                point[0] = x;
                for (var y = bounds.bottom; y <= bounds.top; y++) {
                    point[1] = y;
                    if (drawable.isTouching(point)) {
                        for (var index = 0; index < candidates.length; index++) {
                            if (candidates[index].drawable.isTouching(point)) {
                                return true;
                            }
                        }
                    }
                }
            }

            return false;
        }

        /**
         * Convert a client based x/y position on the canvas to a Scratch 3 world space
         * Rectangle.  This creates recangles with a radius to cover selecting multiple
         * scratch pixels with touch / small render areas.
         *
         * @param {int} centerX The client x coordinate of the picking location.
         * @param {int} centerY The client y coordinate of the picking location.
         * @param {int} [width] The client width of the touch event (optional).
         * @param {int} [height] The client width of the touch event (optional).
         * @returns {Rectangle} Scratch world space rectangle, iterate bottom <= top,
         *                      left <= right.
         */

    }, {
        key: 'clientSpaceToScratchBounds',
        value: function clientSpaceToScratchBounds(centerX, centerY) {
            var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            var gl = this._gl;

            var clientToScratchX = this._nativeSize[0] / gl.canvas.clientWidth;
            var clientToScratchY = this._nativeSize[1] / gl.canvas.clientHeight;

            width *= clientToScratchX;
            height *= clientToScratchY;

            width = Math.max(1, Math.min(Math.round(width), MAX_TOUCH_SIZE[0]));
            height = Math.max(1, Math.min(Math.round(height), MAX_TOUCH_SIZE[1]));
            var x = centerX * clientToScratchX - (width - 1) / 2;
            // + because scratch y is inverted
            var y = centerY * clientToScratchY + (height - 1) / 2;

            var xOfs = width % 2 ? 0 : -0.5;
            // y is offset +0.5
            var yOfs = height % 2 ? 0 : -0.5;

            var bounds = new Rectangle();
            bounds.initFromBounds(Math.floor(this._xLeft + x + xOfs), Math.floor(this._xLeft + x + xOfs + width - 1), Math.ceil(this._yTop - y + yOfs), Math.ceil(this._yTop - y + yOfs + height - 1));
            return bounds;
        }

        /**
         * Determine if the drawable is touching a client based x/y.  Helper method for sensing
         * touching mouse-pointer.  Ignores visibility.
         *
         * @param {int} drawableID The ID of the drawable to check.
         * @param {int} centerX The client x coordinate of the picking location.
         * @param {int} centerY The client y coordinate of the picking location.
         * @param {int} [touchWidth] The client width of the touch event (optional).
         * @param {int} [touchHeight] The client height of the touch event (optional).
         * @returns {boolean} If the drawable has any pixels that would draw in the touch area
         */

    }, {
        key: 'drawableTouching',
        value: function drawableTouching(drawableID, centerX, centerY, touchWidth, touchHeight) {
            var drawable = this._allDrawables[drawableID];
            if (!drawable) {
                return false;
            }
            var bounds = this.clientSpaceToScratchBounds(centerX, centerY, touchWidth, touchHeight);
            var worldPos = twgl.v3.create();

            drawable.updateCPURenderAttributes();

            for (worldPos[1] = bounds.bottom; worldPos[1] <= bounds.top; worldPos[1]++) {
                for (worldPos[0] = bounds.left; worldPos[0] <= bounds.right; worldPos[0]++) {
                    if (drawable.isTouching(worldPos)) {
                        return true;
                    }
                }
            }
            return false;
        }

        /**
         * Detect which sprite, if any, is at the given location.
         * This function will pick all drawables that are visible, unless specific
         * candidate drawable IDs are provided.  Used for determining what is clicked
         * or dragged.  Will not select hidden / ghosted sprites.
         *
         * @param {int} centerX The client x coordinate of the picking location.
         * @param {int} centerY The client y coordinate of the picking location.
         * @param {int} [touchWidth] The client width of the touch event (optional).
         * @param {int} [touchHeight] The client height of the touch event (optional).
         * @param {Array<int>} [candidateIDs] The Drawable IDs to pick from, otherwise all visible drawables.
         * @returns {int} The ID of the topmost Drawable under the picking location, or
         * RenderConstants.ID_NONE if there is no Drawable at that location.
         */

    }, {
        key: 'pick',
        value: function pick(centerX, centerY, touchWidth, touchHeight, candidateIDs) {
            var _this3 = this;

            var bounds = this.clientSpaceToScratchBounds(centerX, centerY, touchWidth, touchHeight);
            if (bounds.left === -Infinity || bounds.bottom === -Infinity) {
                return false;
            }

            candidateIDs = (candidateIDs || this._drawList).filter(function (id) {
                var drawable = _this3._allDrawables[id];
                // default pick list ignores visible and ghosted sprites.
                if (drawable.getVisible() && drawable.getUniforms().u_ghost !== 0) {
                    var drawableBounds = drawable.getFastBounds();
                    var inRange = bounds.intersects(drawableBounds);
                    if (!inRange) return false;

                    drawable.updateCPURenderAttributes();
                    return true;
                }
                return false;
            });
            if (candidateIDs.length === 0) {
                return false;
            }

            var hits = [];
            var worldPos = twgl.v3.create(0, 0, 0);
            // Iterate over the scratch pixels and check if any candidate can be
            // touched at that point.
            for (worldPos[1] = bounds.bottom; worldPos[1] <= bounds.top; worldPos[1]++) {
                for (worldPos[0] = bounds.left; worldPos[0] <= bounds.right; worldPos[0]++) {

                    // Check candidates in the reverse order they would have been
                    // drawn. This will determine what candiate's silhouette pixel
                    // would have been drawn at the point.
                    for (var d = candidateIDs.length - 1; d >= 0; d--) {
                        var id = candidateIDs[d];
                        var drawable = this._allDrawables[id];
                        if (drawable.isTouching(worldPos)) {
                            hits[id] = (hits[id] || 0) + 1;
                            break;
                        }
                    }
                }
            }

            // Bias toward selecting anything over nothing
            hits[RenderConstants.ID_NONE] = 0;

            var hit = RenderConstants.ID_NONE;
            for (var hitID in hits) {
                if (Object.prototype.hasOwnProperty.call(hits, hitID) && hits[hitID] > hits[hit]) {
                    hit = hitID;
                }
            }

            return Number(hit);
        }

        /**
         * @typedef DrawableExtraction
         * @property {ImageData} data Raw pixel data for the drawable
         * @property {number} x The x coordinate of the drawable's bounding box's top-left corner, in 'CSS pixels'
         * @property {number} y The y coordinate of the drawable's bounding box's top-left corner, in 'CSS pixels'
         * @property {number} width The drawable's bounding box width, in 'CSS pixels'
         * @property {number} height The drawable's bounding box height, in 'CSS pixels'
         */

        /**
         * Return a drawable's pixel data and bounds in screen space.
         * @param {int} drawableID The ID of the drawable to get pixel data for
         * @return {DrawableExtraction} Data about the picked drawable
         */

    }, {
        key: 'extractDrawableScreenSpace',
        value: function extractDrawableScreenSpace(drawableID) {
            var drawable = this._allDrawables[drawableID];
            if (!drawable) throw new Error('Could not extract drawable with ID ' + drawableID + '; it does not exist');

            this._doExitDrawRegion();

            var nativeCenterX = this._nativeSize[0] * 0.5;
            var nativeCenterY = this._nativeSize[1] * 0.5;

            var scratchBounds = drawable.getFastBounds();

            var canvas = this.canvas;
            // Ratio of the screen-space scale of the stage's canvas to the "native size" of the stage
            var scaleFactor = canvas.width / this._nativeSize[0];

            // Bounds of the extracted drawable, in "canvas pixel space"
            // (origin is 0, 0, destination is the canvas width, height).
            var canvasSpaceBounds = new Rectangle();
            canvasSpaceBounds.initFromBounds((scratchBounds.left + nativeCenterX) * scaleFactor, (scratchBounds.right + nativeCenterX) * scaleFactor,
            // in "canvas space", +y is down, but Rectangle methods assume bottom < top, so swap them
            (nativeCenterY - scratchBounds.top) * scaleFactor, (nativeCenterY - scratchBounds.bottom) * scaleFactor);
            canvasSpaceBounds.snapToInt();

            // undo the transformation to transform the bounds, snapped to "canvas-pixel space", back to "Scratch space"
            // We have to transform -> snap -> invert transform so that the "Scratch-space" bounds are snapped in
            // "canvas-pixel space".
            scratchBounds.initFromBounds(canvasSpaceBounds.left / scaleFactor - nativeCenterX, canvasSpaceBounds.right / scaleFactor - nativeCenterX, nativeCenterY - canvasSpaceBounds.top / scaleFactor, nativeCenterY - canvasSpaceBounds.bottom / scaleFactor);

            var gl = this._gl;

            // Set a reasonable max limit width and height for the bufferInfo bounds
            var maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            var clampedWidth = Math.min(MAX_EXTRACTED_DRAWABLE_DIMENSION, canvasSpaceBounds.width, maxTextureSize);
            var clampedHeight = Math.min(MAX_EXTRACTED_DRAWABLE_DIMENSION, canvasSpaceBounds.height, maxTextureSize);

            // Make a new bufferInfo since this._queryBufferInfo is limited to 480x360
            var bufferInfo = twgl.createFramebufferInfo(gl, [{ format: gl.RGBA }], clampedWidth, clampedHeight);

            try {
                twgl.bindFramebufferInfo(gl, bufferInfo);

                // Limit size of viewport to the bounds around the target Drawable,
                // and create the projection matrix for the draw.
                gl.viewport(0, 0, clampedWidth, clampedHeight);
                var projection = twgl.m4.ortho(scratchBounds.left, scratchBounds.right, scratchBounds.top, scratchBounds.bottom, -1, 1);

                gl.clearColor(0, 0, 0, 0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                this._drawThese([drawableID], ShaderManager.DRAW_MODE.straightAlpha, projection, {
                    // Don't apply the ghost effect. TODO: is this an intentional design decision?
                    effectMask: ~ShaderManager.EFFECT_INFO.ghost.mask,
                    // We're doing this in screen-space, so the framebuffer dimensions should be those of the canvas in
                    // screen-space. This is used to ensure SVG skins are rendered at the proper resolution.
                    framebufferWidth: canvas.width,
                    framebufferHeight: canvas.height
                });

                var data = new Uint8Array(Math.floor(clampedWidth * clampedHeight * 4));
                gl.readPixels(0, 0, clampedWidth, clampedHeight, gl.RGBA, gl.UNSIGNED_BYTE, data);
                // readPixels can only read into a Uint8Array, but ImageData has to take a Uint8ClampedArray.
                // We can share the same underlying buffer between them to avoid having to copy any data.
                var imageData = new ImageData(new Uint8ClampedArray(data.buffer), clampedWidth, clampedHeight);

                // On high-DPI devices, the canvas' width (in canvas pixels) will be larger than its width in CSS pixels.
                // We want to return the CSS-space bounds,
                // so take into account the ratio between the canvas' pixel dimensions and its layout dimensions.
                // This is usually the same as 1 / window.devicePixelRatio, but if e.g. you zoom your browser window without
                // the canvas resizing, then it'll differ.
                var ratio = canvas.getBoundingClientRect().width / canvas.width;

                return {
                    imageData: imageData,
                    x: canvasSpaceBounds.left * ratio,
                    y: canvasSpaceBounds.bottom * ratio,
                    width: canvasSpaceBounds.width * ratio,
                    height: canvasSpaceBounds.height * ratio
                };
            } finally {
                gl.deleteFramebuffer(bufferInfo.framebuffer);
            }
        }

        /**
         * @typedef ColorExtraction
         * @property {Uint8Array} data Raw pixel data for the drawable
         * @property {int} width Drawable bounding box width
         * @property {int} height Drawable bounding box height
         * @property {object} color Color object with RGBA properties at picked location
         */

        /**
         * Return drawable pixel data and color at a given position
         * @param {int} x The client x coordinate of the picking location.
         * @param {int} y The client y coordinate of the picking location.
         * @param {int} radius The client radius to extract pixels with.
         * @return {?ColorExtraction} Data about the picked color
         */

    }, {
        key: 'extractColor',
        value: function extractColor(x, y, radius) {
            this._doExitDrawRegion();

            var scratchX = Math.round(this._nativeSize[0] * (x / this._gl.canvas.clientWidth - 0.5));
            var scratchY = Math.round(-this._nativeSize[1] * (y / this._gl.canvas.clientHeight - 0.5));

            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            var bounds = new Rectangle();
            bounds.initFromBounds(scratchX - radius, scratchX + radius, scratchY - radius, scratchY + radius);

            var pickX = scratchX - bounds.left;
            var pickY = bounds.top - scratchY;

            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            gl.clearColor.apply(gl, _toConsumableArray(this._backgroundColor4f));
            gl.clear(gl.COLOR_BUFFER_BIT);
            this._drawThese(this._drawList, ShaderManager.DRAW_MODE.default, projection);

            var data = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, data);

            var pixelBase = Math.floor(4 * (pickY * bounds.width + pickX));
            var color = {
                r: data[pixelBase],
                g: data[pixelBase + 1],
                b: data[pixelBase + 2],
                a: data[pixelBase + 3]
            };

            if (this._debugCanvas) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
                var ctx = this._debugCanvas.getContext('2d');
                var imageData = ctx.createImageData(bounds.width, bounds.height);
                imageData.data.set(data);
                ctx.putImageData(imageData, 0, 0);
                ctx.strokeStyle = 'black';
                ctx.fillStyle = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')';
                ctx.rect(pickX - 4, pickY - 4, 8, 8);
                ctx.fill();
                ctx.stroke();
            }

            return {
                data: data,
                width: bounds.width,
                height: bounds.height,
                color: color
            };
        }

        /**
         * Get the candidate bounding box for a touching query.
         * @param {int} drawableID ID for drawable of query.
         * @return {?Rectangle} Rectangle bounds for touching query, or null.
         */

    }, {
        key: '_touchingBounds',
        value: function _touchingBounds(drawableID) {
            var drawable = this._allDrawables[drawableID];

            /** @todo remove this once URL-based skin setting is removed. */
            if (!drawable.skin || !drawable.skin.getTexture([100, 100])) return null;

            var bounds = drawable.getFastBounds();

            // Limit queries to the stage size.
            bounds.clamp(this._xLeft, this._xRight, this._yBottom, this._yTop);

            // Use integer coordinates for queries - weird things happen
            // when you provide float width/heights to gl.viewport and projection.
            bounds.snapToInt();

            if (bounds.width === 0 || bounds.height === 0) {
                // No space to query.
                return null;
            }
            return bounds;
        }

        /**
         * Filter a list of candidates for a touching query into only those that
         * could possibly intersect the given bounds.
         * @param {int} drawableID - ID for drawable of query.
         * @param {Array<int>} candidateIDs - Candidates for touching query.
         * @return {?Array< {id, drawable, intersection} >} Filtered candidates with useful data.
         */

    }, {
        key: '_candidatesTouching',
        value: function _candidatesTouching(drawableID, candidateIDs) {
            var bounds = this._touchingBounds(drawableID);
            var result = [];
            if (bounds === null) {
                return result;
            }
            // iterate through the drawables list BACKWARDS - we want the top most item to be the first we check
            for (var index = candidateIDs.length - 1; index >= 0; index--) {
                var id = candidateIDs[index];
                if (id !== drawableID) {
                    var drawable = this._allDrawables[id];
                    // Text bubbles aren't considered in "touching" queries
                    if (drawable.skin instanceof TextBubbleSkin) continue;
                    if (drawable.skin && drawable._visible) {
                        // Update the CPU position data
                        drawable.updateCPURenderAttributes();
                        var candidateBounds = drawable.getFastBounds();

                        // Push bounds out to integers. If a drawable extends out into half a pixel, that half-pixel still
                        // needs to be tested. Plus, in some areas we construct another rectangle from the union of these,
                        // and iterate over its pixels (width * height). Turns out that doesn't work so well when the
                        // width/height aren't integers.
                        candidateBounds.snapToInt();

                        if (bounds.intersects(candidateBounds)) {
                            result.push({
                                id: id,
                                drawable: drawable,
                                intersection: Rectangle.intersect(bounds, candidateBounds)
                            });
                        }
                    }
                }
            }
            return result;
        }

        /**
         * Helper to get the union bounds from a set of candidates returned from the above method
         * @private
         * @param {Array<object>} candidates info from _candidatesTouching
         * @return {Rectangle} the outer bounding box union
         */

    }, {
        key: '_candidatesBounds',
        value: function _candidatesBounds(candidates) {
            return candidates.reduce(function (memo, _ref2) {
                var intersection = _ref2.intersection;

                if (!memo) {
                    return intersection;
                }
                // store the union of the two rectangles in our static rectangle instance
                return Rectangle.union(memo, intersection, __candidatesBounds);
            }, null);
        }

        /**
         * Update a drawable's skin.
         * @param {number} drawableID The drawable's id.
         * @param {number} skinId The skin to update to.
         */

    }, {
        key: 'updateDrawableSkinId',
        value: function updateDrawableSkinId(drawableID, skinId) {
            var drawable = this._allDrawables[drawableID];
            // TODO: https://github.com/LLK/scratch-vm/issues/2288
            if (!drawable) return;
            drawable.skin = this._allSkins[skinId];
        }

        /**
         * Update a drawable's position.
         * @param {number} drawableID The drawable's id.
         * @param {Array.<number>} position The new position.
         */

    }, {
        key: 'updateDrawablePosition',
        value: function updateDrawablePosition(drawableID, position) {
            var drawable = this._allDrawables[drawableID];
            // TODO: https://github.com/LLK/scratch-vm/issues/2288
            if (!drawable) return;
            drawable.updatePosition(position);
        }

        /**
         * Update a drawable's direction.
         * @param {number} drawableID The drawable's id.
         * @param {number} direction A new direction.
         */

    }, {
        key: 'updateDrawableDirection',
        value: function updateDrawableDirection(drawableID, direction) {
            var drawable = this._allDrawables[drawableID];
            // TODO: https://github.com/LLK/scratch-vm/issues/2288
            if (!drawable) return;
            drawable.updateDirection(direction);
        }

        /**
         * Update a drawable's scale.
         * @param {number} drawableID The drawable's id.
         * @param {Array.<number>} scale A new scale.
         */

    }, {
        key: 'updateDrawableScale',
        value: function updateDrawableScale(drawableID, scale) {
            var drawable = this._allDrawables[drawableID];
            // TODO: https://github.com/LLK/scratch-vm/issues/2288
            if (!drawable) return;
            drawable.updateScale(scale);
        }

        /**
         * Update a drawable's direction and scale together.
         * @param {number} drawableID The drawable's id.
         * @param {number} direction A new direction.
         * @param {Array.<number>} scale A new scale.
         */

    }, {
        key: 'updateDrawableDirectionScale',
        value: function updateDrawableDirectionScale(drawableID, direction, scale) {
            var drawable = this._allDrawables[drawableID];
            // TODO: https://github.com/LLK/scratch-vm/issues/2288
            if (!drawable) return;
            drawable.updateDirection(direction);
            drawable.updateScale(scale);
        }

        /**
         * Update a drawable's visibility.
         * @param {number} drawableID The drawable's id.
         * @param {boolean} visible Will the drawable be visible?
         */

    }, {
        key: 'updateDrawableVisible',
        value: function updateDrawableVisible(drawableID, visible) {
            var drawable = this._allDrawables[drawableID];
            // TODO: https://github.com/LLK/scratch-vm/issues/2288
            if (!drawable) return;
            drawable.updateVisible(visible);
        }

        /**
         * Update a drawable's visual effect.
         * @param {number} drawableID The drawable's id.
         * @param {string} effectName The effect to change.
         * @param {number} value A new effect value.
         */

    }, {
        key: 'updateDrawableEffect',
        value: function updateDrawableEffect(drawableID, effectName, value) {
            var drawable = this._allDrawables[drawableID];
            // TODO: https://github.com/LLK/scratch-vm/issues/2288
            if (!drawable) return;
            drawable.updateEffect(effectName, value);
        }

        /**
         * Update the position, direction, scale, or effect properties of this Drawable.
         * @deprecated Use specific updateDrawable* methods instead.
         * @param {int} drawableID The ID of the Drawable to update.
         * @param {object.<string,*>} properties The new property values to set.
         */

    }, {
        key: 'updateDrawableProperties',
        value: function updateDrawableProperties(drawableID, properties) {
            var drawable = this._allDrawables[drawableID];
            if (!drawable) {
                /**
                 * @todo(https://github.com/LLK/scratch-vm/issues/2288) fix whatever's wrong in the VM which causes this, then add a warning or throw here.
                 * Right now this happens so much on some projects that a warning or exception here can hang the browser.
                 */
                return;
            }
            if ('skinId' in properties) {
                this.updateDrawableSkinId(drawableID, properties.skinId);
            }
            drawable.updateProperties(properties);
        }

        /**
         * Update the position object's x & y members to keep the drawable fenced in view.
         * @param {int} drawableID - The ID of the Drawable to update.
         * @param {Array.<number, number>} position to be fenced - An array of type [x, y]
         * @return {Array.<number, number>} The fenced position as an array [x, y]
         */

    }, {
        key: 'getFencedPositionOfDrawable',
        value: function getFencedPositionOfDrawable(drawableID, position) {
            var x = position[0];
            var y = position[1];

            var drawable = this._allDrawables[drawableID];
            if (!drawable) {
                // @todo(https://github.com/LLK/scratch-vm/issues/2288) fix whatever's wrong in the VM which causes this, then add a warning or throw here.
                // Right now this happens so much on some projects that a warning or exception here can hang the browser.
                return [x, y];
            }

            var dx = x - drawable._position[0];
            var dy = y - drawable._position[1];
            var aabb = drawable._skin.getFenceBounds(drawable, __fenceBounds);
            var inset = Math.floor(Math.min(aabb.width, aabb.height) / 2);

            var sx = this._xRight - Math.min(FENCE_WIDTH, inset);
            if (aabb.right + dx < -sx) {
                x = Math.ceil(drawable._position[0] - (sx + aabb.right));
            } else if (aabb.left + dx > sx) {
                x = Math.floor(drawable._position[0] + (sx - aabb.left));
            }
            var sy = this._yTop - Math.min(FENCE_WIDTH, inset);
            if (aabb.top + dy < -sy) {
                y = Math.ceil(drawable._position[1] - (sy + aabb.top));
            } else if (aabb.bottom + dy > sy) {
                y = Math.floor(drawable._position[1] + (sy - aabb.bottom));
            }
            return [x, y];
        }

        /**
         * Clear a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         */

    }, {
        key: 'penClear',
        value: function penClear(penSkinID) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.clear();
        }

        /**
         * Draw a point on a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {PenAttributes} penAttributes - how the point should be drawn.
         * @param {number} x - the X coordinate of the point to draw.
         * @param {number} y - the Y coordinate of the point to draw.
         */

    }, {
        key: 'penPoint',
        value: function penPoint(penSkinID, penAttributes, x, y) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.drawPoint(penAttributes, x, y);
        }

        /**
         * Draw a line on a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {PenAttributes} penAttributes - how the line should be drawn.
         * @param {number} x0 - the X coordinate of the beginning of the line.
         * @param {number} y0 - the Y coordinate of the beginning of the line.
         * @param {number} x1 - the X coordinate of the end of the line.
         * @param {number} y1 - the Y coordinate of the end of the line.
         */

    }, {
        key: 'penLine',
        value: function penLine(penSkinID, penAttributes, x0, y0, x1, y1) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.drawLine(penAttributes, x0, y0, x1, y1);
        }

        /**
         * Stamp a Drawable onto a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {int} stampID - the unique ID of the Drawable to use as the stamp.
         */

    }, {
        key: 'penStamp',
        value: function penStamp(penSkinID, stampID) {
            var stampDrawable = this._allDrawables[stampID];
            if (!stampDrawable) {
                return;
            }

            var bounds = this._touchingBounds(stampID);
            if (!bounds) {
                return;
            }

            this._doExitDrawRegion();

            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];

            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, skin._framebuffer);

            // Limit size of viewport to the bounds around the stamp Drawable and create the projection matrix for the draw.
            gl.viewport(this._nativeSize[0] * 0.5 + bounds.left, this._nativeSize[1] * 0.5 - bounds.top, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            // Draw the stamped sprite onto the PenSkin's framebuffer.
            this._drawThese([stampID], ShaderManager.DRAW_MODE.default, projection, { ignoreVisibility: true });
            skin._silhouetteDirty = true;
        }

        /* ******
         * Truly internal functions: these support the functions above.
         ********/

        /**
         * Build geometry (vertex and index) buffers.
         * @private
         */

    }, {
        key: '_createGeometry',
        value: function _createGeometry() {
            var quad = {
                a_position: {
                    numComponents: 2,
                    data: [-0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5]
                },
                a_texCoord: {
                    numComponents: 2,
                    data: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]
                }
            };
            this._bufferInfo = twgl.createBufferInfoFromArrays(this._gl, quad);
        }

        /**
         * Respond to a change in the "native" rendering size. The native size is used by buffers which are fixed in size
         * regardless of the size of the main render target. This includes the buffers used for queries such as picking and
         * color-touching. The fixed size allows (more) consistent behavior across devices and presentation modes.
         * @param {object} event - The change event.
         * @private
         */

    }, {
        key: 'onNativeSizeChanged',
        value: function onNativeSizeChanged(event) {
            var _event$newSize = _slicedToArray(event.newSize, 2),
                width = _event$newSize[0],
                height = _event$newSize[1];

            var gl = this._gl;
            var attachments = [{ format: gl.RGBA }, { format: gl.DEPTH_STENCIL }];

            if (!this._pickBufferInfo) {
                this._pickBufferInfo = twgl.createFramebufferInfo(gl, attachments, MAX_TOUCH_SIZE[0], MAX_TOUCH_SIZE[1]);
            }

            /** @todo should we create this on demand to save memory? */
            // A 480x360 32-bpp buffer is 675 KiB.
            if (this._queryBufferInfo) {
                twgl.resizeFramebufferInfo(gl, this._queryBufferInfo, attachments, width, height);
            } else {
                this._queryBufferInfo = twgl.createFramebufferInfo(gl, attachments, width, height);
            }
        }

        /**
         * Enter a draw region.
         *
         * A draw region is where multiple draw operations are performed with the
         * same GL state. WebGL performs poorly when it changes state like blend
         * mode. Marking a collection of state values as a "region" the renderer
         * can skip superfluous extra state calls when it is already in that
         * region. Since one region may be entered from within another a exit
         * handle can also be registered that is called when a new region is about
         * to be entered to restore a common inbetween state.
         *
         * @param {any} regionId - id of the region to enter
         * @param {function} enter - handle to call when first entering a region
         * @param {function} exit - handle to call when leaving a region
         */

    }, {
        key: 'enterDrawRegion',
        value: function enterDrawRegion(regionId) {
            var enter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : regionId.enter;
            var exit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : regionId.exit;

            if (this._regionId !== regionId) {
                this._doExitDrawRegion();
                this._regionId = regionId;
                enter();
                this._exitRegion = exit;
            }
        }

        /**
         * Forcefully exit the current region returning to a common inbetween GL
         * state.
         */

    }, {
        key: '_doExitDrawRegion',
        value: function _doExitDrawRegion() {
            if (this._exitRegion !== null) {
                this._exitRegion();
            }
            this._exitRegion = null;
            this._regionId = null;
        }

        /**
         * Draw a set of Drawables, by drawable ID
         * @param {Array<int>} drawables The Drawable IDs to draw, possibly this._drawList.
         * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
         * @param {module:twgl/m4.Mat4} projection The projection matrix to use.
         * @param {object} [opts] Options for drawing
         * @param {idFilterFunc} opts.filter An optional filter function.
         * @param {object.<string,*>} opts.extraUniforms Extra uniforms for the shaders.
         * @param {int} opts.effectMask Bitmask for effects to allow
         * @param {boolean} opts.ignoreVisibility Draw all, despite visibility (e.g. stamping, touching color)
         * @param {int} opts.framebufferWidth The width of the framebuffer being drawn onto. Defaults to "native" width
         * @param {int} opts.framebufferHeight The height of the framebuffer being drawn onto. Defaults to "native" height
         * @private
         */

    }, {
        key: '_drawThese',
        value: function _drawThese(drawables, drawMode, projection) {
            var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


            var gl = this._gl;
            var currentShader = null;

            var framebufferSpaceScaleDiffers = 'framebufferWidth' in opts && 'framebufferHeight' in opts && opts.framebufferWidth !== this._nativeSize[0] && opts.framebufferHeight !== this._nativeSize[1];

            var numDrawables = drawables.length;
            for (var drawableIndex = 0; drawableIndex < numDrawables; ++drawableIndex) {
                var drawableID = drawables[drawableIndex];

                // If we have a filter, check whether the ID fails
                if (opts.filter && !opts.filter(drawableID)) continue;

                var drawable = this._allDrawables[drawableID];
                /** @todo check if drawable is inside the viewport before anything else */

                // Hidden drawables (e.g., by a "hide" block) are not drawn unless
                // the ignoreVisibility flag is used (e.g. for stamping or touchingColor).
                if (!drawable.getVisible() && !opts.ignoreVisibility) continue;

                // drawableScale is the "framebuffer-pixel-space" scale of the drawable, as percentages of the drawable's
                // "native size" (so 100 = same as skin's "native size", 200 = twice "native size").
                // If the framebuffer dimensions are the same as the stage's "native" size, there's no need to calculate it.
                var drawableScale = framebufferSpaceScaleDiffers ? [drawable.scale[0] * opts.framebufferWidth / this._nativeSize[0], drawable.scale[1] * opts.framebufferHeight / this._nativeSize[1]] : drawable.scale;

                // If the skin or texture isn't ready yet, skip it.
                if (!drawable.skin || !drawable.skin.getTexture(drawableScale)) continue;

                var uniforms = {};

                var effectBits = drawable.enabledEffects;
                effectBits &= Object.prototype.hasOwnProperty.call(opts, 'effectMask') ? opts.effectMask : effectBits;
                var newShader = this._shaderManager.getShader(drawMode, effectBits);

                // Manually perform region check. Do not create functions inside a
                // loop.
                if (this._regionId !== newShader) {
                    this._doExitDrawRegion();
                    this._regionId = newShader;

                    currentShader = newShader;
                    gl.useProgram(currentShader.program);
                    twgl.setBuffersAndAttributes(gl, currentShader, this._bufferInfo);
                    Object.assign(uniforms, {
                        u_projectionMatrix: projection
                    });
                }

                Object.assign(uniforms, drawable.skin.getUniforms(drawableScale), drawable.getUniforms());

                // Apply extra uniforms after the Drawable's, to allow overwriting.
                if (opts.extraUniforms) {
                    Object.assign(uniforms, opts.extraUniforms);
                }

                if (uniforms.u_skin) {
                    twgl.setTextureParameters(gl, uniforms.u_skin, {
                        minMag: drawable.skin.useNearest(drawableScale, drawable) ? gl.NEAREST : gl.LINEAR
                    });
                }

                twgl.setUniforms(currentShader, uniforms);
                twgl.drawBufferInfo(gl, this._bufferInfo, gl.TRIANGLES);
            }

            this._regionId = null;
        }

        /**
         * Get the convex hull points for a particular Drawable.
         * To do this, calculate it based on the drawable's Silhouette.
         * @param {int} drawableID The Drawable IDs calculate convex hull for.
         * @return {Array<Array<number>>} points Convex hull points, as [[x, y], ...]
         */

    }, {
        key: '_getConvexHullPointsForDrawable',
        value: function _getConvexHullPointsForDrawable(drawableID) {
            var drawable = this._allDrawables[drawableID];

            var _drawable$skin$size = _slicedToArray(drawable.skin.size, 2),
                width = _drawable$skin$size[0],
                height = _drawable$skin$size[1];
            // No points in the hull if invisible or size is 0.


            if (!drawable.getVisible() || width === 0 || height === 0) {
                return [];
            }

            drawable.updateCPURenderAttributes();

            /**
             * Return the determinant of two vectors, the vector from A to B and the vector from A to C.
             *
             * The determinant is useful in this case to know if AC is counter-clockwise from AB.
             * A positive value means that AC is counter-clockwise from AB. A negative value means AC is clockwise from AB.
             *
             * @param {Float32Array} A A 2d vector in space.
             * @param {Float32Array} B A 2d vector in space.
             * @param {Float32Array} C A 2d vector in space.
             * @return {number} Greater than 0 if counter clockwise, less than if clockwise, 0 if all points are on a line.
             */
            var determinant = function determinant(A, B, C) {
                // AB = B - A
                // AC = C - A
                // det (AB BC) = AB0 * AC1 - AB1 * AC0
                return (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]);
            };

            // This algorithm for calculating the convex hull somewhat resembles the monotone chain algorithm.
            // The main difference is that instead of sorting the points by x-coordinate, and y-coordinate in case of ties,
            // it goes through them by y-coordinate in the outer loop and x-coordinate in the inner loop.
            // This gives us "left" and "right" hulls, whereas the monotone chain algorithm gives "top" and "bottom" hulls.
            // Adapted from https://github.com/LLK/scratch-flash/blob/dcbeeb59d44c3be911545dfe54d46a32404f8e69/src/scratch/ScratchCostume.as#L369-L413

            var leftHull = [];
            var rightHull = [];

            // While convex hull algorithms usually push and pop values from the list of hull points,
            // here, we keep indices for the "last" point in each array. Any points past these indices are ignored.
            // This is functionally equivalent to pushing and popping from a "stack" of hull points.
            var leftEndPointIndex = -1;
            var rightEndPointIndex = -1;

            var _pixelPos = twgl.v3.create();
            var _effectPos = twgl.v3.create();

            var currentPoint = void 0;

            // *Not* Scratch Space-- +y is bottom
            // Loop over all rows of pixels, starting at the top
            for (var y = 0; y < height; y++) {
                _pixelPos[1] = y / height;

                // We start at the leftmost point, then go rightwards until we hit an opaque pixel
                var x = 0;
                for (; x < width; x++) {
                    _pixelPos[0] = x / width;
                    EffectTransform.transformPoint(drawable, _pixelPos, _effectPos);
                    if (drawable.skin.isTouchingLinear(_effectPos)) {
                        currentPoint = [x, y];
                        break;
                    }
                }

                // If we managed to loop all the way through, there are no opaque pixels on this row. Go to the next one
                if (x >= width) {
                    continue;
                }

                // Because leftEndPointIndex is initialized to -1, this is skipped for the first two rows.
                // It runs only when there are enough points in the left hull to make at least one line.
                // If appending the current point to the left hull makes a counter-clockwise turn,
                // we want to append the current point. Otherwise, we decrement the index of the "last" hull point until the
                // current point makes a counter-clockwise turn.
                // This decrementing has the same effect as popping from the point list, but is hopefully faster.
                while (leftEndPointIndex > 0) {
                    if (determinant(leftHull[leftEndPointIndex], leftHull[leftEndPointIndex - 1], currentPoint) > 0) {
                        break;
                    } else {
                        // leftHull.pop();
                        --leftEndPointIndex;
                    }
                }

                // This has the same effect as pushing to the point list.
                // This "list head pointer" coding style leaves excess points dangling at the end of the list,
                // but that doesn't matter; we simply won't copy them over to the final hull.

                // leftHull.push(currentPoint);
                leftHull[++leftEndPointIndex] = currentPoint;

                // Now we repeat the process for the right side, looking leftwards for a pixel.
                for (x = width - 1; x >= 0; x--) {
                    _pixelPos[0] = x / width;
                    EffectTransform.transformPoint(drawable, _pixelPos, _effectPos);
                    if (drawable.skin.isTouchingLinear(_effectPos)) {
                        currentPoint = [x, y];
                        break;
                    }
                }

                // Because we're coming at this from the right, it goes clockwise this time.
                while (rightEndPointIndex > 0) {
                    if (determinant(rightHull[rightEndPointIndex], rightHull[rightEndPointIndex - 1], currentPoint) < 0) {
                        break;
                    } else {
                        --rightEndPointIndex;
                    }
                }

                rightHull[++rightEndPointIndex] = currentPoint;
            }

            // Start off "hullPoints" with the left hull points.
            var hullPoints = leftHull;
            // This is where we get rid of those dangling extra points.
            hullPoints.length = leftEndPointIndex + 1;
            // Add points from the right side in reverse order so all points are ordered clockwise.
            for (var j = rightEndPointIndex; j >= 0; --j) {
                hullPoints.push(rightHull[j]);
            }

            // Simplify boundary points using hull.js.
            // TODO: Remove this; this algorithm already generates convex hulls.
            return hull(hullPoints, Infinity);
        }

        /**
         * Sample a "final" color from an array of drawables at a given scratch space.
         * Will blend any alpha values with the drawables "below" it.
         * @param {twgl.v3} vec Scratch Vector Space to sample
         * @param {Array<Drawables>} drawables A list of drawables with the "top most"
         *              drawable at index 0
         * @param {Uint8ClampedArray} dst The color3b space to store the answer in.
         * @return {Uint8ClampedArray} The dst vector with everything blended down.
         */

    }, {
        key: 'requestSnapshot',


        /**
         * @callback RenderWebGL#snapshotCallback
         * @param {string} dataURI Data URI of the snapshot of the renderer
         */

        /**
         * @param {snapshotCallback} callback Function called in the next frame with the snapshot data
         */
        value: function requestSnapshot(callback) {
            this._snapshotCallbacks.push(callback);
        }
    }, {
        key: 'gl',
        get: function get() {
            return this._gl;
        }

        /**
         * @returns {HTMLCanvasElement} the canvas of the WebGL rendering context associated with this renderer.
         */

    }, {
        key: 'canvas',
        get: function get() {
            return this._gl && this._gl.canvas;
        }
    }, {
        key: '_visibleDrawList',
        get: function get() {
            var _this4 = this;

            return this._drawList.filter(function (id) {
                return _this4._allDrawables[id]._visible;
            });
        }
    }], [{
        key: 'sampleColor3b',
        value: function sampleColor3b(vec, drawables, dst) {
            dst = dst || new Uint8ClampedArray(3);
            dst.fill(0);
            var blendAlpha = 1;
            for (var index = 0; blendAlpha !== 0 && index < drawables.length; index++) {
                /*
                if (left > vec[0] || right < vec[0] ||
                    bottom > vec[1] || top < vec[0]) {
                    continue;
                }
                */
                Drawable.sampleColor4b(vec, drawables[index].drawable, __blendColor);
                // Equivalent to gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
                dst[0] += __blendColor[0] * blendAlpha;
                dst[1] += __blendColor[1] * blendAlpha;
                dst[2] += __blendColor[2] * blendAlpha;
                blendAlpha *= 1 - __blendColor[3] / 255;
            }
            // Backdrop could be transparent, so we need to go to the "clear color" of the
            // draw scene (white) as a fallback if everything was alpha
            dst[0] += blendAlpha * 255;
            dst[1] += blendAlpha * 255;
            dst[2] += blendAlpha * 255;
            return dst;
        }
    }]);

    return RenderWebGL;
}(EventEmitter);

// :3


RenderWebGL.prototype.canHazPixels = RenderWebGL.prototype.extractDrawableScreenSpace;

/**
 * Values for setUseGPU()
 * @enum {string}
 */
RenderWebGL.UseGpuModes = {
    /**
     * Heuristically decide whether to use the GPU path, the CPU path, or a dynamic mixture of the two.
     */
    Automatic: 'Automatic',

    /**
     * Always use the GPU path.
     */
    ForceGPU: 'ForceGPU',

    /**
     * Always use the CPU path.
     */
    ForceCPU: 'ForceCPU'
};

module.exports = RenderWebGL;

/***/ }),

/***/ "./src/SVGSkin.js":
/*!************************!*\
  !*** ./src/SVGSkin.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var Skin = __webpack_require__(/*! ./Skin */ "./src/Skin.js");

var _require = __webpack_require__(/*! scratch-svg-renderer */ "scratch-svg-renderer"),
    loadSvgString = _require.loadSvgString,
    serializeSvgToString = _require.serializeSvgToString;

var ShaderManager = __webpack_require__(/*! ./ShaderManager */ "./src/ShaderManager.js");

var MAX_TEXTURE_DIMENSION = 2048;

/**
 * All scaled renderings of the SVG are stored in an array. The 1.0 scale of
 * the SVG is stored at the 8th index. The smallest possible 1 / 256 scale
 * rendering is stored at the 0th index.
 * @const {number}
 */
var INDEX_OFFSET = 8;

var SVGSkin = function (_Skin) {
    _inherits(SVGSkin, _Skin);

    /**
     * Create a new SVG skin.
     * @param {!int} id - The ID for this Skin.
     * @param {!RenderWebGL} renderer - The renderer which will use this skin.
     * @constructor
     * @extends Skin
     */
    function SVGSkin(id, renderer) {
        _classCallCheck(this, SVGSkin);

        /** @type {RenderWebGL} */
        var _this = _possibleConstructorReturn(this, (SVGSkin.__proto__ || Object.getPrototypeOf(SVGSkin)).call(this, id));

        _this._renderer = renderer;

        /** @type {HTMLImageElement} */
        _this._svgImage = document.createElement('img');

        /** @type {boolean} */
        _this._svgImageLoaded = false;

        /** @type {Array<number>} */
        _this._size = [0, 0];

        /** @type {HTMLCanvasElement} */
        _this._canvas = document.createElement('canvas');

        /** @type {CanvasRenderingContext2D} */
        _this._context = _this._canvas.getContext('2d');

        /** @type {Array<WebGLTexture>} */
        _this._scaledMIPs = [];

        /** @type {number} */
        _this._largestMIPScale = 0;

        /**
        * Ratio of the size of the SVG and the max size of the WebGL texture
        * @type {Number}
        */
        _this._maxTextureScale = 1;
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(SVGSkin, [{
        key: 'dispose',
        value: function dispose() {
            this.resetMIPs();
            _get(SVGSkin.prototype.__proto__ || Object.getPrototypeOf(SVGSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @return {Array<number>} the natural size, in Scratch units, of this skin.
         */

    }, {
        key: 'useNearest',
        value: function useNearest(scale, drawable) {
            // If the effect bits for mosaic, pixelate, whirl, or fisheye are set, use linear
            if ((drawable.enabledEffects & (ShaderManager.EFFECT_INFO.fisheye.mask | ShaderManager.EFFECT_INFO.whirl.mask | ShaderManager.EFFECT_INFO.pixelate.mask | ShaderManager.EFFECT_INFO.mosaic.mask)) !== 0) {
                return false;
            }

            // We can't use nearest neighbor unless we are a multiple of 90 rotation
            if (drawable._direction % 90 !== 0) {
                return false;
            }

            // Because SVG skins' bounding boxes are currently not pixel-aligned, the idea here is to hide blurriness
            // by using nearest-neighbor scaling if one screen-space pixel is "close enough" to one texture pixel.
            // If the scale of the skin is very close to 100 (0.99999 variance is okay I guess)
            // TODO: Make this check more precise. We should use nearest if there's less than one pixel's difference
            // between the screen-space and texture-space sizes of the skin. Mipmaps make this harder because there are
            // multiple textures (and hence multiple texture spaces) and we need to know which one to choose.
            if (Math.abs(scale[0]) > 99 && Math.abs(scale[0]) < 101 && Math.abs(scale[1]) > 99 && Math.abs(scale[1]) < 101) {
                return true;
            }
            return false;
        }

        /**
         * Create a MIP for a given scale.
         * @param {number} scale - The relative size of the MIP
         * @return {SVGMIP} An object that handles creating and updating SVG textures.
         */

    }, {
        key: 'createMIP',
        value: function createMIP(scale) {
            var _size = _slicedToArray(this._size, 2),
                width = _size[0],
                height = _size[1];

            this._canvas.width = width * scale;
            this._canvas.height = height * scale;
            if (this._canvas.width <= 0 || this._canvas.height <= 0 ||
            // Even if the canvas at the current scale has a nonzero size, the image's dimensions are floored
            // pre-scaling; e.g. if an image has a width of 0.4 and is being rendered at 3x scale, the canvas will have
            // a width of 1, but the image's width will be rounded down to 0 on some browsers (Firefox) prior to being
            // drawn at that scale, resulting in an IndexSizeError if we attempt to draw it.
            this._svgImage.naturalWidth <= 0 || this._svgImage.naturalHeight <= 0) return _get(SVGSkin.prototype.__proto__ || Object.getPrototypeOf(SVGSkin.prototype), 'getTexture', this).call(this);
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this._context.setTransform(scale, 0, 0, scale, 0, 0);
            this._context.drawImage(this._svgImage, 0, 0);

            // Pull out the ImageData from the canvas. ImageData speeds up
            // updating Silhouette and is better handled by more browsers in
            // regards to memory.
            var textureData = this._context.getImageData(0, 0, this._canvas.width, this._canvas.height);

            var textureOptions = {
                auto: false,
                wrap: this._renderer.gl.CLAMP_TO_EDGE,
                src: textureData,
                premultiplyAlpha: true
            };

            var mip = twgl.createTexture(this._renderer.gl, textureOptions);

            // Check if this is the largest MIP created so far. Currently, silhouettes only get scaled up.
            if (this._largestMIPScale < scale) {
                this._silhouette.update(textureData);
                this._largestMIPScale = scale;
            }

            return mip;
        }
    }, {
        key: 'updateSilhouette',
        value: function updateSilhouette() {
            var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [100, 100];

            // Ensure a silhouette exists.
            this.getTexture(scale);
        }

        /**
         * @param {Array<number>} scale - The scaling factors to be used, each in the [0,100] range.
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given scale.
         */

    }, {
        key: 'getTexture',
        value: function getTexture(scale) {
            // The texture only ever gets uniform scale. Take the larger of the two axes.
            var scaleMax = scale ? Math.max(Math.abs(scale[0]), Math.abs(scale[1])) : 100;
            var requestedScale = Math.min(scaleMax / 100, this._maxTextureScale);

            // Math.ceil(Math.log2(scale)) means we use the "1x" texture at (0.5, 1] scale,
            // the "2x" texture at (1, 2] scale, the "4x" texture at (2, 4] scale, etc.
            // This means that one texture pixel will always be between 0.5x and 1x the size of one rendered pixel,
            // but never bigger than one rendered pixel--this prevents blurriness from blowing up the texture too much.
            var mipLevel = Math.max(Math.ceil(Math.log2(requestedScale)) + INDEX_OFFSET, 0);
            // Can't use bitwise stuff here because we need to handle negative exponents
            var mipScale = Math.pow(2, mipLevel - INDEX_OFFSET);

            if (this._svgImageLoaded && !this._scaledMIPs[mipLevel]) {
                this._scaledMIPs[mipLevel] = this.createMIP(mipScale);
            }

            return this._scaledMIPs[mipLevel] || _get(SVGSkin.prototype.__proto__ || Object.getPrototypeOf(SVGSkin.prototype), 'getTexture', this).call(this);
        }

        /**
         * Do a hard reset of the existing MIPs by deleting them.
         */

    }, {
        key: 'resetMIPs',
        value: function resetMIPs() {
            var _this2 = this;

            this._scaledMIPs.forEach(function (oldMIP) {
                return _this2._renderer.gl.deleteTexture(oldMIP);
            });
            this._scaledMIPs.length = 0;
            this._largestMIPScale = 0;
        }

        /**
         * Set the contents of this skin to a snapshot of the provided SVG data.
         * @param {string} svgData - new SVG to use.
         * @param {Array<number>} [rotationCenter] - Optional rotation center for the SVG. If not supplied, it will be
         * calculated from the bounding box
         * @fires Skin.event:WasAltered
         */

    }, {
        key: 'setSVG',
        value: function setSVG(svgData, rotationCenter) {
            var _this3 = this;

            var svgTag = loadSvgString(svgData);
            var svgText = serializeSvgToString(svgTag, true /* shouldInjectFonts */);
            this._svgImageLoaded = false;

            var _svgTag$viewBox$baseV = svgTag.viewBox.baseVal,
                x = _svgTag$viewBox$baseV.x,
                y = _svgTag$viewBox$baseV.y,
                width = _svgTag$viewBox$baseV.width,
                height = _svgTag$viewBox$baseV.height;
            // While we're setting the size before the image is loaded, this doesn't cause the skin to appear with the wrong
            // size for a few frames while the new image is loading, because we don't emit the `WasAltered` event, telling
            // drawables using this skin to update, until the image is loaded.
            // We need to do this because the VM reads the skin's `size` directly after calling `setSVG`.
            // TODO: return a Promise so that the VM can read the skin's `size` after the image is loaded.

            this._size[0] = width;
            this._size[1] = height;

            // If there is another load already in progress, replace the old onload to effectively cancel the old load
            this._svgImage.onload = function () {
                if (width === 0 || height === 0) {
                    _get(SVGSkin.prototype.__proto__ || Object.getPrototypeOf(SVGSkin.prototype), 'setEmptyImageData', _this3).call(_this3);
                    return;
                }

                var maxDimension = Math.ceil(Math.max(width, height));
                var testScale = 2;
                for (testScale; maxDimension * testScale <= MAX_TEXTURE_DIMENSION; testScale *= 2) {
                    _this3._maxTextureScale = testScale;
                }

                _this3.resetMIPs();

                if (typeof rotationCenter === 'undefined') rotationCenter = _this3.calculateRotationCenter();
                // Compensate for viewbox offset.
                // See https://github.com/LLK/scratch-render/pull/90.
                _this3._rotationCenter[0] = rotationCenter[0] - x;
                _this3._rotationCenter[1] = rotationCenter[1] - y;

                _this3._svgImageLoaded = true;

                _this3.emit(Skin.Events.WasAltered);
            };

            this._svgImage.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgText);
        }
    }, {
        key: 'size',
        get: function get() {
            return [this._size[0], this._size[1]];
        }
    }]);

    return SVGSkin;
}(Skin);

module.exports = SVGSkin;

/***/ }),

/***/ "./src/ShaderManager.js":
/*!******************************!*\
  !*** ./src/ShaderManager.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var ShaderManager = function () {
    /**
     * @param {WebGLRenderingContext} gl WebGL rendering context to create shaders for
     * @constructor
     */
    function ShaderManager(gl) {
        _classCallCheck(this, ShaderManager);

        this._gl = gl;

        /**
         * The cache of all shaders compiled so far, filled on demand.
         * @type {Object<ShaderManager.DRAW_MODE, Array<ProgramInfo>>}
         * @private
         */
        this._shaderCache = {};
        for (var modeName in ShaderManager.DRAW_MODE) {
            if (Object.prototype.hasOwnProperty.call(ShaderManager.DRAW_MODE, modeName)) {
                this._shaderCache[modeName] = [];
            }
        }
    }

    /**
     * Fetch the shader for a particular set of active effects.
     * Build the shader if necessary.
     * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
     * @param {int} effectBits Bitmask representing the enabled effects.
     * @returns {ProgramInfo} The shader's program info.
     */


    _createClass(ShaderManager, [{
        key: 'getShader',
        value: function getShader(drawMode, effectBits) {
            var cache = this._shaderCache[drawMode];
            if (drawMode === ShaderManager.DRAW_MODE.silhouette) {
                // Silhouette mode isn't affected by these effects.
                effectBits &= ~(ShaderManager.EFFECT_INFO.color.mask | ShaderManager.EFFECT_INFO.brightness.mask);
            }
            var shader = cache[effectBits];
            if (!shader) {
                shader = cache[effectBits] = this._buildShader(drawMode, effectBits);
            }
            return shader;
        }

        /**
         * Build the shader for a particular set of active effects.
         * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
         * @param {int} effectBits Bitmask representing the enabled effects.
         * @returns {ProgramInfo} The new shader's program info.
         * @private
         */

    }, {
        key: '_buildShader',
        value: function _buildShader(drawMode, effectBits) {
            var numEffects = ShaderManager.EFFECTS.length;

            var defines = ['#define DRAW_MODE_' + drawMode];
            for (var index = 0; index < numEffects; ++index) {
                if ((effectBits & 1 << index) !== 0) {
                    defines.push('#define ENABLE_' + ShaderManager.EFFECTS[index]);
                }
            }

            var definesText = defines.join('\n') + '\n';

            /* eslint-disable global-require */
            var vsFullText = definesText + __webpack_require__(/*! raw-loader!./shaders/sprite.vert */ "./node_modules/raw-loader/index.js!./src/shaders/sprite.vert");
            var fsFullText = definesText + __webpack_require__(/*! raw-loader!./shaders/sprite.frag */ "./node_modules/raw-loader/index.js!./src/shaders/sprite.frag");
            /* eslint-enable global-require */

            return twgl.createProgramInfo(this._gl, [vsFullText, fsFullText]);
        }
    }]);

    return ShaderManager;
}();

/**
 * @typedef {object} ShaderManager.Effect
 * @prop {int} mask - The bit in 'effectBits' representing the effect.
 * @prop {function} converter - A conversion function which takes a Scratch value (generally in the range
 *   0..100 or -100..100) and maps it to a value useful to the shader. This
 *   mapping may not be reversible.
 * @prop {boolean} shapeChanges - Whether the effect could change the drawn shape.
 */

/**
 * Mapping of each effect name to info about that effect.
 * @enum {ShaderManager.Effect}
 */


ShaderManager.EFFECT_INFO = {
    /** Color effect */
    color: {
        uniformName: 'u_color',
        mask: 1 << 0,
        converter: function converter(x) {
            return x / 200 % 1;
        },
        shapeChanges: false
    },
    /** Fisheye effect */
    fisheye: {
        uniformName: 'u_fisheye',
        mask: 1 << 1,
        converter: function converter(x) {
            return Math.max(0, (x + 100) / 100);
        },
        shapeChanges: true
    },
    /** Whirl effect */
    whirl: {
        uniformName: 'u_whirl',
        mask: 1 << 2,
        converter: function converter(x) {
            return -x * Math.PI / 180;
        },
        shapeChanges: true
    },
    /** Pixelate effect */
    pixelate: {
        uniformName: 'u_pixelate',
        mask: 1 << 3,
        converter: function converter(x) {
            return Math.abs(x) / 10;
        },
        shapeChanges: true
    },
    /** Mosaic effect */
    mosaic: {
        uniformName: 'u_mosaic',
        mask: 1 << 4,
        converter: function converter(x) {
            x = Math.round((Math.abs(x) + 10) / 10);
            /** @todo cap by Math.min(srcWidth, srcHeight) */
            return Math.max(1, Math.min(x, 512));
        },
        shapeChanges: true
    },
    /** Brightness effect */
    brightness: {
        uniformName: 'u_brightness',
        mask: 1 << 5,
        converter: function converter(x) {
            return Math.max(-100, Math.min(x, 100)) / 100;
        },
        shapeChanges: false
    },
    /** Ghost effect */
    ghost: {
        uniformName: 'u_ghost',
        mask: 1 << 6,
        converter: function converter(x) {
            return 1 - Math.max(0, Math.min(x, 100)) / 100;
        },
        shapeChanges: false
    }
};

/**
 * The name of each supported effect.
 * @type {Array}
 */
ShaderManager.EFFECTS = Object.keys(ShaderManager.EFFECT_INFO);

/**
 * The available draw modes.
 * @readonly
 * @enum {string}
 */
ShaderManager.DRAW_MODE = {
    /**
     * Draw normally. Its output will use premultiplied alpha.
     */
    default: 'default',

    /**
     * Draw with non-premultiplied alpha. Useful for reading pixels from GL into an ImageData object.
     */
    straightAlpha: 'straightAlpha',

    /**
     * Draw a silhouette using a solid color.
     */
    silhouette: 'silhouette',

    /**
     * Draw only the parts of the drawable which match a particular color.
     */
    colorMask: 'colorMask',

    /**
     * Draw a line with caps.
     */
    line: 'line',

    /**
     * Draw the background in a certain color. Must sometimes be used instead of gl.clear.
     */
    background: 'background'
};

module.exports = ShaderManager;

/***/ }),

/***/ "./src/Silhouette.js":
/*!***************************!*\
  !*** ./src/Silhouette.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileoverview
 * A representation of a Skin's silhouette that can test if a point on the skin
 * renders a pixel where it is drawn.
 */

/**
 * <canvas> element used to update Silhouette data from skin bitmap data.
 * @type {CanvasElement}
 */
var __SilhouetteUpdateCanvas = void 0;

// Optimized Math.min and Math.max for integers;
// taken from https://web.archive.org/web/20190716181049/http://guihaire.com/code/?p=549
var intMin = function intMin(i, j) {
    return j ^ (i ^ j) & i - j >> 31;
};
var intMax = function intMax(i, j) {
    return i ^ (i ^ j) & i - j >> 31;
};

/**
 * Internal helper function (in hopes that compiler can inline).  Get a pixel
 * from silhouette data, or 0 if outside it's bounds.
 * @private
 * @param {Silhouette} silhouette - has data width and height
 * @param {number} x - x
 * @param {number} y - y
 * @return {number} Alpha value for x/y position
 */
var getPoint = function getPoint(_ref, x, y) {
    var width = _ref._width,
        height = _ref._height,
        data = _ref._colorData;

    // 0 if outside bounds, otherwise read from data.
    if (x >= width || y >= height || x < 0 || y < 0) {
        return 0;
    }
    return data[(y * width + x) * 4 + 3];
};

/**
 * Memory buffers for doing 4 corner sampling for linear interpolation
 */
var __cornerWork = [new Uint8ClampedArray(4), new Uint8ClampedArray(4), new Uint8ClampedArray(4), new Uint8ClampedArray(4)];

/**
 * Get the color from a given silhouette at an x/y local texture position.
 * Multiply color values by alpha for proper blending.
 * @param {Silhouette} $0 The silhouette to sample.
 * @param {number} x X position of texture [0, width).
 * @param {number} y Y position of texture [0, height).
 * @param {Uint8ClampedArray} dst A color 4b space.
 * @return {Uint8ClampedArray} The dst vector.
 */
var getColor4b = function getColor4b(_ref2, x, y, dst) {
    var width = _ref2._width,
        height = _ref2._height,
        data = _ref2._colorData;

    // Clamp coords to edge, matching GL_CLAMP_TO_EDGE.
    // (See github.com/LLK/scratch-render/blob/954cfff02b08069a082cbedd415c1fecd9b1e4fb/src/BitmapSkin.js#L88)
    x = intMax(0, intMin(x, width - 1));
    y = intMax(0, intMin(y, height - 1));

    // 0 if outside bounds, otherwise read from data.
    if (x >= width || y >= height || x < 0 || y < 0) {
        return dst.fill(0);
    }
    var offset = (y * width + x) * 4;
    // premultiply alpha
    var alpha = data[offset + 3] / 255;
    dst[0] = data[offset] * alpha;
    dst[1] = data[offset + 1] * alpha;
    dst[2] = data[offset + 2] * alpha;
    dst[3] = data[offset + 3];
    return dst;
};

/**
 * Get the color from a given silhouette at an x/y local texture position.
 * Do not multiply color values by alpha, as it has already been done.
 * @param {Silhouette} $0 The silhouette to sample.
 * @param {number} x X position of texture [0, width).
 * @param {number} y Y position of texture [0, height).
 * @param {Uint8ClampedArray} dst A color 4b space.
 * @return {Uint8ClampedArray} The dst vector.
 */
var getPremultipliedColor4b = function getPremultipliedColor4b(_ref3, x, y, dst) {
    var width = _ref3._width,
        height = _ref3._height,
        data = _ref3._colorData;

    // Clamp coords to edge, matching GL_CLAMP_TO_EDGE.
    x = intMax(0, intMin(x, width - 1));
    y = intMax(0, intMin(y, height - 1));

    var offset = (y * width + x) * 4;
    dst[0] = data[offset];
    dst[1] = data[offset + 1];
    dst[2] = data[offset + 2];
    dst[3] = data[offset + 3];
    return dst;
};

var Silhouette = function () {
    function Silhouette() {
        _classCallCheck(this, Silhouette);

        /**
         * The width of the data representing the current skin data.
         * @type {number}
         */
        this._width = 0;

        /**
         * The height of the data representing the current skin date.
         * @type {number}
         */
        this._height = 0;

        /**
         * The data representing a skin's silhouette shape.
         * @type {Uint8ClampedArray}
         */
        this._colorData = null;

        // By default, silhouettes are assumed not to contain premultiplied image data,
        // so when we get a color, we want to multiply it by its alpha channel.
        // Point `_getColor` to the version of the function that multiplies.
        this._getColor = getColor4b;

        this.colorAtNearest = this.colorAtLinear = function (_, dst) {
            return dst.fill(0);
        };
    }

    /**
     * Update this silhouette with the bitmapData for a skin.
     * @param {ImageData|HTMLCanvasElement|HTMLImageElement} bitmapData An image, canvas or other element that the skin
     * @param {boolean} isPremultiplied True if the source bitmap data comes premultiplied (e.g. from readPixels).
     * rendering can be queried from.
     */


    _createClass(Silhouette, [{
        key: 'update',
        value: function update(bitmapData) {
            var isPremultiplied = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var imageData = void 0;
            if (bitmapData instanceof ImageData) {
                // If handed ImageData directly, use it directly.
                imageData = bitmapData;
                this._width = bitmapData.width;
                this._height = bitmapData.height;
            } else {
                // Draw about anything else to our update canvas and poll image data
                // from that.
                var canvas = Silhouette._updateCanvas();
                var width = this._width = canvas.width = bitmapData.width;
                var height = this._height = canvas.height = bitmapData.height;
                var ctx = canvas.getContext('2d');

                if (!(width && height)) {
                    return;
                }
                ctx.clearRect(0, 0, width, height);
                ctx.drawImage(bitmapData, 0, 0, width, height);
                imageData = ctx.getImageData(0, 0, width, height);
            }

            if (isPremultiplied) {
                this._getColor = getPremultipliedColor4b;
            } else {
                this._getColor = getColor4b;
            }

            this._colorData = imageData.data;
            // delete our custom overriden "uninitalized" color functions
            // let the prototype work for itself
            delete this.colorAtNearest;
            delete this.colorAtLinear;
        }

        /**
         * Sample a color from the silhouette at a given local position using
         * "nearest neighbor"
         * @param {twgl.v3} vec [x,y] texture space (0-1)
         * @param {Uint8ClampedArray} dst The memory buffer to store the value in. (4 bytes)
         * @returns {Uint8ClampedArray} dst
         */

    }, {
        key: 'colorAtNearest',
        value: function colorAtNearest(vec, dst) {
            return this._getColor(this, Math.floor(vec[0] * (this._width - 1)), Math.floor(vec[1] * (this._height - 1)), dst);
        }

        /**
         * Sample a color from the silhouette at a given local position using
         * "linear interpolation"
         * @param {twgl.v3} vec [x,y] texture space (0-1)
         * @param {Uint8ClampedArray} dst The memory buffer to store the value in. (4 bytes)
         * @returns {Uint8ClampedArray} dst
         */

    }, {
        key: 'colorAtLinear',
        value: function colorAtLinear(vec, dst) {
            var x = vec[0] * (this._width - 1);
            var y = vec[1] * (this._height - 1);

            var x1D = x % 1;
            var y1D = y % 1;
            var x0D = 1 - x1D;
            var y0D = 1 - y1D;

            var xFloor = Math.floor(x);
            var yFloor = Math.floor(y);

            var x0y0 = this._getColor(this, xFloor, yFloor, __cornerWork[0]);
            var x1y0 = this._getColor(this, xFloor + 1, yFloor, __cornerWork[1]);
            var x0y1 = this._getColor(this, xFloor, yFloor + 1, __cornerWork[2]);
            var x1y1 = this._getColor(this, xFloor + 1, yFloor + 1, __cornerWork[3]);

            dst[0] = x0y0[0] * x0D * y0D + x0y1[0] * x0D * y1D + x1y0[0] * x1D * y0D + x1y1[0] * x1D * y1D;
            dst[1] = x0y0[1] * x0D * y0D + x0y1[1] * x0D * y1D + x1y0[1] * x1D * y0D + x1y1[1] * x1D * y1D;
            dst[2] = x0y0[2] * x0D * y0D + x0y1[2] * x0D * y1D + x1y0[2] * x1D * y0D + x1y1[2] * x1D * y1D;
            dst[3] = x0y0[3] * x0D * y0D + x0y1[3] * x0D * y1D + x1y0[3] * x1D * y0D + x1y1[3] * x1D * y1D;

            return dst;
        }

        /**
         * Test if texture coordinate touches the silhouette using nearest neighbor.
         * @param {twgl.v3} vec A texture coordinate.
         * @return {boolean} If the nearest pixel has an alpha value.
         */

    }, {
        key: 'isTouchingNearest',
        value: function isTouchingNearest(vec) {
            if (!this._colorData) return;
            return getPoint(this, Math.floor(vec[0] * (this._width - 1)), Math.floor(vec[1] * (this._height - 1))) > 0;
        }

        /**
         * Test to see if any of the 4 pixels used in the linear interpolate touch
         * the silhouette.
         * @param {twgl.v3} vec A texture coordinate.
         * @return {boolean} Any of the pixels have some alpha.
         */

    }, {
        key: 'isTouchingLinear',
        value: function isTouchingLinear(vec) {
            if (!this._colorData) return;
            var x = Math.floor(vec[0] * (this._width - 1));
            var y = Math.floor(vec[1] * (this._height - 1));
            return getPoint(this, x, y) > 0 || getPoint(this, x + 1, y) > 0 || getPoint(this, x, y + 1) > 0 || getPoint(this, x + 1, y + 1) > 0;
        }

        /**
         * Get the canvas element reused by Silhouettes to update their data with.
         * @private
         * @return {CanvasElement} A canvas to draw bitmap data to.
         */

    }], [{
        key: '_updateCanvas',
        value: function _updateCanvas() {
            if (typeof __SilhouetteUpdateCanvas === 'undefined') {
                __SilhouetteUpdateCanvas = document.createElement('canvas');
            }
            return __SilhouetteUpdateCanvas;
        }
    }]);

    return Silhouette;
}();

module.exports = Silhouette;

/***/ }),

/***/ "./src/Skin.js":
/*!*********************!*\
  !*** ./src/Skin.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(/*! events */ "events");

var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var RenderConstants = __webpack_require__(/*! ./RenderConstants */ "./src/RenderConstants.js");
var Silhouette = __webpack_require__(/*! ./Silhouette */ "./src/Silhouette.js");

var Skin = function (_EventEmitter) {
  _inherits(Skin, _EventEmitter);

  /**
   * Create a Skin, which stores and/or generates textures for use in rendering.
   * @param {int} id - The unique ID for this Skin.
   * @constructor
   */
  function Skin(id) {
    _classCallCheck(this, Skin);

    /** @type {int} */
    var _this = _possibleConstructorReturn(this, (Skin.__proto__ || Object.getPrototypeOf(Skin)).call(this));

    _this._id = id;

    /** @type {Vec3} */
    _this._rotationCenter = twgl.v3.create(0, 0);

    /** @type {WebGLTexture} */
    _this._texture = null;

    /**
     * The uniforms to be used by the vertex and pixel shaders.
     * Some of these are used by other parts of the renderer as well.
     * @type {Object.<string,*>}
     * @private
     */
    _this._uniforms = {
      /**
       * The nominal (not necessarily current) size of the current skin.
       * @type {Array<number>}
       */
      u_skinSize: [0, 0],

      /**
       * The actual WebGL texture object for the skin.
       * @type {WebGLTexture}
       */
      u_skin: null
    };

    /**
     * A silhouette to store touching data, skins are responsible for keeping it up to date.
     * @private
     */
    _this._silhouette = new Silhouette();

    _this.setMaxListeners(RenderConstants.SKIN_SHARE_SOFT_LIMIT);
    return _this;
  }

  /**
   * Dispose of this object. Do not use it after calling this method.
   */


  _createClass(Skin, [{
    key: 'dispose',
    value: function dispose() {
      this._id = RenderConstants.ID_NONE;
    }

    /**
     * @return {int} the unique ID for this Skin.
     */

  }, {
    key: 'useNearest',


    /**
     * Should this skin's texture be filtered with nearest-neighbor or linear interpolation at the given scale?
     * @param {?Array<Number>} scale The screen-space X and Y scaling factors at which this skin's texture will be
     * displayed, as percentages (100 means 1 "native size" unit is 1 screen pixel; 200 means 2 screen pixels, etc).
     * @param {Drawable} drawable The drawable that this skin's texture will be applied to.
     * @return {boolean} True if this skin's texture, as returned by {@link getTexture}, should be filtered with
     * nearest-neighbor interpolation.
     */
    // eslint-disable-next-line no-unused-vars
    value: function useNearest(scale, drawable) {
      return true;
    }

    /**
     * Get the center of the current bounding box
     * @return {Array<number>} the center of the current bounding box
     */

  }, {
    key: 'calculateRotationCenter',
    value: function calculateRotationCenter() {
      return [this.size[0] / 2, this.size[1] / 2];
    }

    /**
     * @abstract
     * @param {Array<number>} scale - The scaling factors to be used.
     * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given size.
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'getTexture',
    value: function getTexture(scale) {
      return this._emptyImageTexture;
    }

    /**
     * Get the bounds of the drawable for determining its fenced position.
     * @param {Array<number>} drawable - The Drawable instance this skin is using.
     * @param {?Rectangle} result - Optional destination for bounds calculation.
     * @return {!Rectangle} The drawable's bounds. For compatibility with Scratch 2, we always use getAABB.
     */

  }, {
    key: 'getFenceBounds',
    value: function getFenceBounds(drawable, result) {
      return drawable.getAABB(result);
    }

    /**
     * Update and returns the uniforms for this skin.
     * @param {Array<number>} scale - The scaling factors to be used.
     * @returns {object.<string, *>} the shader uniforms to be used when rendering with this Skin.
     */

  }, {
    key: 'getUniforms',
    value: function getUniforms(scale) {
      this._uniforms.u_skin = this.getTexture(scale);
      this._uniforms.u_skinSize = this.size;
      return this._uniforms;
    }

    /**
     * If the skin defers silhouette operations until the last possible minute,
     * this will be called before isTouching uses the silhouette.
     * @abstract
     */

  }, {
    key: 'updateSilhouette',
    value: function updateSilhouette() {}

    /**
     * Set this skin's texture to the given image.
     * @param {ImageData|HTMLCanvasElement} textureData - The canvas or image data to set the texture to.
     */

  }, {
    key: '_setTexture',
    value: function _setTexture(textureData) {
      var gl = this._renderer.gl;

      gl.bindTexture(gl.TEXTURE_2D, this._texture);
      // Premultiplied alpha is necessary for proper blending.
      // See http://www.realtimerendering.com/blog/gpus-prefer-premultiplication/
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureData);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);

      this._silhouette.update(textureData);
    }

    /**
     * Set the contents of this skin to an empty skin.
     * @fires Skin.event:WasAltered
     */

  }, {
    key: 'setEmptyImageData',
    value: function setEmptyImageData() {
      // Free up the current reference to the _texture
      this._texture = null;

      if (!this._emptyImageData) {
        // Create a transparent pixel
        this._emptyImageData = new ImageData(1, 1);

        // Create a new texture and update the silhouette
        var gl = this._renderer.gl;

        var textureOptions = {
          auto: true,
          wrap: gl.CLAMP_TO_EDGE,
          src: this._emptyImageData
        };

        // Note: we're using _emptyImageTexture here instead of _texture
        // so that we can cache this empty texture for later use as needed.
        // this._texture can get modified by other skins (e.g. BitmapSkin
        // and SVGSkin, so we can't use that same field for caching)
        this._emptyImageTexture = twgl.createTexture(gl, textureOptions);
      }

      this._rotationCenter[0] = 0;
      this._rotationCenter[1] = 0;

      this._silhouette.update(this._emptyImageData);
      this.emit(Skin.Events.WasAltered);
    }

    /**
     * Does this point touch an opaque or translucent point on this skin?
     * Nearest Neighbor version
     * The caller is responsible for ensuring this skin's silhouette is up-to-date.
     * @see updateSilhouette
     * @see Drawable.updateCPURenderAttributes
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Did it touch?
     */

  }, {
    key: 'isTouchingNearest',
    value: function isTouchingNearest(vec) {
      return this._silhouette.isTouchingNearest(vec);
    }

    /**
     * Does this point touch an opaque or translucent point on this skin?
     * Linear Interpolation version
     * The caller is responsible for ensuring this skin's silhouette is up-to-date.
     * @see updateSilhouette
     * @see Drawable.updateCPURenderAttributes
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Did it touch?
     */

  }, {
    key: 'isTouchingLinear',
    value: function isTouchingLinear(vec) {
      return this._silhouette.isTouchingLinear(vec);
    }
  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }

    /**
     * @returns {Vec3} the origin, in object space, about which this Skin should rotate.
     */

  }, {
    key: 'rotationCenter',
    get: function get() {
      return this._rotationCenter;
    }

    /**
     * @abstract
     * @return {Array<number>} the "native" size, in texels, of this skin.
     */

  }, {
    key: 'size',
    get: function get() {
      return [0, 0];
    }
  }]);

  return Skin;
}(EventEmitter);

/**
 * These are the events which can be emitted by instances of this class.
 * @enum {string}
 */


Skin.Events = {
  /**
   * Emitted when anything about the Skin has been altered, such as the appearance or rotation center.
   * @event Skin.event:WasAltered
   */
  WasAltered: 'WasAltered'
};

module.exports = Skin;

/***/ }),

/***/ "./src/TextBubbleSkin.js":
/*!*******************************!*\
  !*** ./src/TextBubbleSkin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(/*! twgl.js */ "twgl.js");

var TextWrapper = __webpack_require__(/*! ./util/text-wrapper */ "./src/util/text-wrapper.js");
var CanvasMeasurementProvider = __webpack_require__(/*! ./util/canvas-measurement-provider */ "./src/util/canvas-measurement-provider.js");
var Skin = __webpack_require__(/*! ./Skin */ "./src/Skin.js");

var BubbleStyle = {
    MAX_LINE_WIDTH: 170, // Maximum width, in Scratch pixels, of a single line of text

    MIN_WIDTH: 50, // Minimum width, in Scratch pixels, of a text bubble
    STROKE_WIDTH: 4, // Thickness of the stroke around the bubble. Only half's visible because it's drawn under the fill
    PADDING: 10, // Padding around the text area
    CORNER_RADIUS: 16, // Radius of the rounded corners
    TAIL_HEIGHT: 12, // Height of the speech bubble's "tail". Probably should be a constant.

    FONT: 'Helvetica', // Font to render the text with
    FONT_SIZE: 14, // Font size, in Scratch pixels
    FONT_HEIGHT_RATIO: 0.9, // Height, in Scratch pixels, of the text, as a proportion of the font's size
    LINE_HEIGHT: 16, // Spacing between each line of text

    COLORS: {
        BUBBLE_FILL: 'white',
        BUBBLE_STROKE: 'rgba(0, 0, 0, 0.15)',
        TEXT_FILL: '#575E75'
    }
};

var TextBubbleSkin = function (_Skin) {
    _inherits(TextBubbleSkin, _Skin);

    /**
     * Create a new text bubble skin.
     * @param {!int} id - The ID for this Skin.
     * @param {!RenderWebGL} renderer - The renderer which will use this skin.
     * @constructor
     * @extends Skin
     */
    function TextBubbleSkin(id, renderer) {
        _classCallCheck(this, TextBubbleSkin);

        /** @type {RenderWebGL} */
        var _this = _possibleConstructorReturn(this, (TextBubbleSkin.__proto__ || Object.getPrototypeOf(TextBubbleSkin)).call(this, id));

        _this._renderer = renderer;

        /** @type {HTMLCanvasElement} */
        _this._canvas = document.createElement('canvas');

        /** @type {Array<number>} */
        _this._size = [0, 0];

        /** @type {number} */
        _this._renderedScale = 0;

        /** @type {Array<string>} */
        _this._lines = [];

        /** @type {object} */
        _this._textAreaSize = { width: 0, height: 0 };

        /** @type {string} */
        _this._bubbleType = '';

        /** @type {boolean} */
        _this._pointsLeft = false;

        /** @type {boolean} */
        _this._textDirty = true;

        /** @type {boolean} */
        _this._textureDirty = true;

        _this.measurementProvider = new CanvasMeasurementProvider(_this._canvas.getContext('2d'));
        _this.textWrapper = new TextWrapper(_this.measurementProvider);

        _this._restyleCanvas();
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(TextBubbleSkin, [{
        key: 'dispose',
        value: function dispose() {
            if (this._texture) {
                this._renderer.gl.deleteTexture(this._texture);
                this._texture = null;
            }
            this._canvas = null;
            _get(TextBubbleSkin.prototype.__proto__ || Object.getPrototypeOf(TextBubbleSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @return {Array<number>} the dimensions, in Scratch units, of this skin.
         */

    }, {
        key: 'setTextBubble',


        /**
         * Set parameters for this text bubble.
         * @param {!string} type - either "say" or "think".
         * @param {!string} text - the text for the bubble.
         * @param {!boolean} pointsLeft - which side the bubble is pointing.
         */
        value: function setTextBubble(type, text, pointsLeft) {
            this._text = text;
            this._bubbleType = type;
            this._pointsLeft = pointsLeft;

            this._textDirty = true;
            this._textureDirty = true;
            this.emit(Skin.Events.WasAltered);
        }

        /**
         * Re-style the canvas after resizing it. This is necessary to ensure proper text measurement.
         */

    }, {
        key: '_restyleCanvas',
        value: function _restyleCanvas() {
            this._canvas.getContext('2d').font = BubbleStyle.FONT_SIZE + 'px ' + BubbleStyle.FONT + ', sans-serif';
        }

        /**
         * Update the array of wrapped lines and the text dimensions.
         */

    }, {
        key: '_reflowLines',
        value: function _reflowLines() {
            this._lines = this.textWrapper.wrapText(BubbleStyle.MAX_LINE_WIDTH, this._text);

            // Measure width of longest line to avoid extra-wide bubbles
            var longestLineWidth = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var line = _step.value;

                    longestLineWidth = Math.max(longestLineWidth, this.measurementProvider.measureText(line));
                }

                // Calculate the canvas-space sizes of the padded text area and full text bubble
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var paddedWidth = Math.max(longestLineWidth, BubbleStyle.MIN_WIDTH) + BubbleStyle.PADDING * 2;
            var paddedHeight = BubbleStyle.LINE_HEIGHT * this._lines.length + BubbleStyle.PADDING * 2;

            this._textAreaSize.width = paddedWidth;
            this._textAreaSize.height = paddedHeight;

            this._size[0] = paddedWidth + BubbleStyle.STROKE_WIDTH;
            this._size[1] = paddedHeight + BubbleStyle.STROKE_WIDTH + BubbleStyle.TAIL_HEIGHT;

            this._textDirty = false;
        }

        /**
         * Render this text bubble at a certain scale, using the current parameters, to the canvas.
         * @param {number} scale The scale to render the bubble at
         */

    }, {
        key: '_renderTextBubble',
        value: function _renderTextBubble(scale) {
            var ctx = this._canvas.getContext('2d');

            if (this._textDirty) {
                this._reflowLines();
            }

            // Calculate the canvas-space sizes of the padded text area and full text bubble
            var paddedWidth = this._textAreaSize.width;
            var paddedHeight = this._textAreaSize.height;

            // Resize the canvas to the correct screen-space size
            this._canvas.width = Math.ceil(this._size[0] * scale);
            this._canvas.height = Math.ceil(this._size[1] * scale);
            this._restyleCanvas();

            // Reset the transform before clearing to ensure 100% clearage
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

            ctx.scale(scale, scale);
            ctx.translate(BubbleStyle.STROKE_WIDTH * 0.5, BubbleStyle.STROKE_WIDTH * 0.5);

            // If the text bubble points leftward, flip the canvas
            ctx.save();
            if (this._pointsLeft) {
                ctx.scale(-1, 1);
                ctx.translate(-paddedWidth, 0);
            }

            // Draw the bubble's rounded borders
            ctx.beginPath();
            ctx.moveTo(BubbleStyle.CORNER_RADIUS, paddedHeight);
            ctx.arcTo(0, paddedHeight, 0, paddedHeight - BubbleStyle.CORNER_RADIUS, BubbleStyle.CORNER_RADIUS);
            ctx.arcTo(0, 0, paddedWidth, 0, BubbleStyle.CORNER_RADIUS);
            ctx.arcTo(paddedWidth, 0, paddedWidth, paddedHeight, BubbleStyle.CORNER_RADIUS);
            ctx.arcTo(paddedWidth, paddedHeight, paddedWidth - BubbleStyle.CORNER_RADIUS, paddedHeight, BubbleStyle.CORNER_RADIUS);

            // Translate the canvas so we don't have to do a bunch of width/height arithmetic
            ctx.save();
            ctx.translate(paddedWidth - BubbleStyle.CORNER_RADIUS, paddedHeight);

            // Draw the bubble's "tail"
            if (this._bubbleType === 'say') {
                // For a speech bubble, draw one swoopy thing
                ctx.bezierCurveTo(0, 4, 4, 8, 4, 10);
                ctx.arcTo(4, 12, 2, 12, 2);
                ctx.bezierCurveTo(-1, 12, -11, 8, -16, 0);

                ctx.closePath();
            } else {
                // For a thinking bubble, draw a partial circle attached to the bubble...
                ctx.arc(-16, 0, 4, 0, Math.PI);

                ctx.closePath();

                // and two circles detached from it
                ctx.moveTo(-7, 7.25);
                ctx.arc(-9.25, 7.25, 2.25, 0, Math.PI * 2);

                ctx.moveTo(0, 9.5);
                ctx.arc(-1.5, 9.5, 1.5, 0, Math.PI * 2);
            }

            // Un-translate the canvas and fill + stroke the text bubble
            ctx.restore();

            ctx.fillStyle = BubbleStyle.COLORS.BUBBLE_FILL;
            ctx.strokeStyle = BubbleStyle.COLORS.BUBBLE_STROKE;
            ctx.lineWidth = BubbleStyle.STROKE_WIDTH;

            ctx.stroke();
            ctx.fill();

            // Un-flip the canvas if it was flipped
            ctx.restore();

            // Draw each line of text
            ctx.fillStyle = BubbleStyle.COLORS.TEXT_FILL;
            ctx.font = BubbleStyle.FONT_SIZE + 'px ' + BubbleStyle.FONT + ', sans-serif';
            var lines = this._lines;
            for (var lineNumber = 0; lineNumber < lines.length; lineNumber++) {
                var line = lines[lineNumber];
                ctx.fillText(line, BubbleStyle.PADDING, BubbleStyle.PADDING + BubbleStyle.LINE_HEIGHT * lineNumber + BubbleStyle.FONT_HEIGHT_RATIO * BubbleStyle.FONT_SIZE);
            }

            this._renderedScale = scale;
        }
    }, {
        key: 'updateSilhouette',
        value: function updateSilhouette() {
            var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [100, 100];

            // Ensure a silhouette exists.
            this.getTexture(scale);
        }

        /**
         * @param {Array<number>} scale - The scaling factors to be used, each in the [0,100] range.
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given scale.
         */

    }, {
        key: 'getTexture',
        value: function getTexture(scale) {
            // The texture only ever gets uniform scale. Take the larger of the two axes.
            var scaleMax = scale ? Math.max(Math.abs(scale[0]), Math.abs(scale[1])) : 100;
            var requestedScale = scaleMax / 100;

            // If we already rendered the text bubble at this scale, we can skip re-rendering it.
            if (this._textureDirty || this._renderedScale !== requestedScale) {
                this._renderTextBubble(requestedScale);
                this._textureDirty = false;

                var context = this._canvas.getContext('2d');
                var textureData = context.getImageData(0, 0, this._canvas.width, this._canvas.height);

                var gl = this._renderer.gl;

                if (this._texture === null) {
                    var textureOptions = {
                        auto: false,
                        wrap: gl.CLAMP_TO_EDGE
                    };

                    this._texture = twgl.createTexture(gl, textureOptions);
                }

                this._setTexture(textureData);
            }

            return this._texture;
        }
    }, {
        key: 'size',
        get: function get() {
            if (this._textDirty) {
                this._reflowLines();
            }
            return this._size;
        }
    }]);

    return TextBubbleSkin;
}(Skin);

module.exports = TextBubbleSkin;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RenderWebGL = __webpack_require__(/*! ./RenderWebGL */ "./src/RenderWebGL.js");

/**
 * Export for NPM & Node.js
 * @type {RenderWebGL}
 */
module.exports = RenderWebGL;

/***/ }),

/***/ "./src/util/canvas-measurement-provider.js":
/*!*************************************************!*\
  !*** ./src/util/canvas-measurement-provider.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasMeasurementProvider = function () {
    /**
     * @param {CanvasRenderingContext2D} ctx - provides a canvas rendering context
     * with 'font' set to the text style of the text to be wrapped.
     */
    function CanvasMeasurementProvider(ctx) {
        _classCallCheck(this, CanvasMeasurementProvider);

        this._ctx = ctx;
        this._cache = {};
    }

    // We don't need to set up or tear down anything here. Should these be removed altogether?

    /**
     * Called by the TextWrapper before a batch of zero or more calls to measureText().
     */


    _createClass(CanvasMeasurementProvider, [{
        key: "beginMeasurementSession",
        value: function beginMeasurementSession() {}

        /**
         * Called by the TextWrapper after a batch of zero or more calls to measureText().
         */

    }, {
        key: "endMeasurementSession",
        value: function endMeasurementSession() {}

        /**
         * Measure a whole string as one unit.
         * @param {string} text - the text to measure.
         * @returns {number} - the length of the string.
         */

    }, {
        key: "measureText",
        value: function measureText(text) {
            if (!this._cache[text]) {
                this._cache[text] = this._ctx.measureText(text).width;
            }
            return this._cache[text];
        }
    }]);

    return CanvasMeasurementProvider;
}();

module.exports = CanvasMeasurementProvider;

/***/ }),

/***/ "./src/util/color-conversions.js":
/*!***************************************!*\
  !*** ./src/util/color-conversions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://lolengine.net/blog/2013/01/13/fast-rgb-to-hsv.
 * Assumes r, g, and b are in the range [0, 255] and
 * returns h, s, and v in the range [0, 1].
 *
 * @param   {Array<number>} rgb   The RGB color value
 * @param   {number}        rgb.r The red color value
 * @param   {number}        rgb.g The green color value
 * @param   {number}        rgb.b The blue color value
 * @param   {Array<number>} dst   The array to store the HSV values in
 * @return  {Array<number>}       The `dst` array passed in
 */
var rgbToHsv = function rgbToHsv(_ref, dst) {
    var _ref2 = _slicedToArray(_ref, 3),
        r = _ref2[0],
        g = _ref2[1],
        b = _ref2[2];

    var K = 0.0;

    r /= 255;
    g /= 255;
    b /= 255;
    var tmp = 0;

    if (g < b) {
        tmp = g;
        g = b;
        b = tmp;

        K = -1;
    }

    if (r < g) {
        tmp = r;
        r = g;
        g = tmp;

        K = -2 / 6 - K;
    }

    var chroma = r - Math.min(g, b);
    var h = Math.abs(K + (g - b) / (6 * chroma + Number.EPSILON));
    var s = chroma / (r + Number.EPSILON);
    var v = r;

    dst[0] = h;
    dst[1] = s;
    dst[2] = v;

    return dst;
};

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from https://gist.github.com/mjackson/5311256.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {Array<number>}                hsv The HSV color value
 * @param   {number}                       hsv.h     The hue
 * @param   {number}                       hsv.s     The saturation
 * @param   {number}                       hsv.v     The value
 * @param   {Uint8Array|Uint8ClampedArray} dst The array to store the RGB values in
 * @return  {Uint8Array|Uint8ClampedArray}     The `dst` array passed in
 */
var hsvToRgb = function hsvToRgb(_ref3, dst) {
    var _ref4 = _slicedToArray(_ref3, 3),
        h = _ref4[0],
        s = _ref4[1],
        v = _ref4[2];

    if (s === 0) {
        dst[0] = dst[1] = dst[2] = v * 255 + 0.5;
        return dst;
    }

    // keep hue in [0,1) so the `switch(i)` below only needs 6 cases (0-5)
    h %= 1;
    var i = h * 6 | 0;
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - s * f);
    var t = v * (1 - s * (1 - f));

    var r = 0;
    var g = 0;
    var b = 0;

    switch (i) {
        case 0:
            r = v;g = t;b = p;break;
        case 1:
            r = q;g = v;b = p;break;
        case 2:
            r = p;g = v;b = t;break;
        case 3:
            r = p;g = q;b = v;break;
        case 4:
            r = t;g = p;b = v;break;
        case 5:
            r = v;g = p;b = q;break;
    }

    // Add 0.5 in order to round. Setting integer TypedArray elements implicitly floors.
    dst[0] = r * 255 + 0.5;
    dst[1] = g * 255 + 0.5;
    dst[2] = b * 255 + 0.5;
    return dst;
};

module.exports = { rgbToHsv: rgbToHsv, hsvToRgb: hsvToRgb };

/***/ }),

/***/ "./src/util/log.js":
/*!*************************!*\
  !*** ./src/util/log.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var minilog = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/index.js");
minilog.enable();

module.exports = minilog('scratch-render');

/***/ }),

/***/ "./src/util/text-wrapper.js":
/*!**********************************!*\
  !*** ./src/util/text-wrapper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineBreaker = __webpack_require__(/*! ify-loader!linebreak */ "!ify-loader!linebreak");
var GraphemeBreaker = __webpack_require__(/*! ify-loader!grapheme-breaker */ "!ify-loader!grapheme-breaker");

/**
 * Tell this text wrapper to use a specific measurement provider.
 * @typedef {object} MeasurementProvider - the new measurement provider.
 * @property {Function} beginMeasurementSession - this will be called before a batch of measurements are made.
 *      Optionally, this function may return an object to be provided to the endMeasurementSession function.
 * @property {Function} measureText - this will be called each time a piece of text must be measured.
 * @property {Function} endMeasurementSession - this will be called after a batch of measurements is finished.
 *      It will be passed whatever value beginMeasurementSession returned, if any.
 */

/**
 * Utility to wrap text across several lines, respecting Unicode grapheme clusters and, when possible, Unicode line
 * break opportunities.
 * Reference material:
 * - Unicode Standard Annex #14: http://unicode.org/reports/tr14/
 * - Unicode Standard Annex #29: http://unicode.org/reports/tr29/
 * - "JavaScript has a Unicode problem" by Mathias Bynens: https://mathiasbynens.be/notes/javascript-unicode
 */

var TextWrapper = function () {
    /**
     * Construct a text wrapper which will measure text using the specified measurement provider.
     * @param {MeasurementProvider} measurementProvider - a helper object to provide text measurement services.
     */
    function TextWrapper(measurementProvider) {
        _classCallCheck(this, TextWrapper);

        this._measurementProvider = measurementProvider;
        this._cache = {};
    }

    /**
     * Wrap the provided text into lines restricted to a maximum width. See Unicode Standard Annex (UAX) #14.
     * @param {number} maxWidth - the maximum allowed width of a line.
     * @param {string} text - the text to be wrapped. Will be split on whitespace.
     * @returns {Array.<string>} an array containing the wrapped lines of text.
     */


    _createClass(TextWrapper, [{
        key: 'wrapText',
        value: function wrapText(maxWidth, text) {
            // Normalize to canonical composition (see Unicode Standard Annex (UAX) #15)
            text = text.normalize();

            var cacheKey = maxWidth + '-' + text;
            if (this._cache[cacheKey]) {
                return this._cache[cacheKey];
            }

            var measurementSession = this._measurementProvider.beginMeasurementSession();

            var breaker = new LineBreaker(text);
            var lastPosition = 0;
            var nextBreak = void 0;
            var currentLine = null;
            var lines = [];

            while (nextBreak = breaker.nextBreak()) {
                var word = text.slice(lastPosition, nextBreak.position).replace(/\n+$/, '');

                var proposedLine = (currentLine || '').concat(word);
                var proposedLineWidth = this._measurementProvider.measureText(proposedLine);

                if (proposedLineWidth > maxWidth) {
                    // The next word won't fit on this line. Will it fit on a line by itself?
                    var wordWidth = this._measurementProvider.measureText(word);
                    if (wordWidth > maxWidth) {
                        // The next word can't even fit on a line by itself. Consume it one grapheme cluster at a time.
                        var lastCluster = 0;
                        var nextCluster = void 0;
                        while (lastCluster !== (nextCluster = GraphemeBreaker.nextBreak(word, lastCluster))) {
                            var cluster = word.substring(lastCluster, nextCluster);
                            proposedLine = (currentLine || '').concat(cluster);
                            proposedLineWidth = this._measurementProvider.measureText(proposedLine);
                            if (currentLine === null || proposedLineWidth <= maxWidth) {
                                // first cluster of a new line or the cluster fits
                                currentLine = proposedLine;
                            } else {
                                // no more can fit
                                lines.push(currentLine);
                                currentLine = cluster;
                            }
                            lastCluster = nextCluster;
                        }
                    } else {
                        // The next word can fit on the next line. Finish the current line and move on.
                        if (currentLine !== null) lines.push(currentLine);
                        currentLine = word;
                    }
                } else {
                    // The next word fits on this line. Just keep going.
                    currentLine = proposedLine;
                }

                // Did we find a \n or similar?
                if (nextBreak.required) {
                    if (currentLine !== null) lines.push(currentLine);
                    currentLine = null;
                }

                lastPosition = nextBreak.position;
            }

            currentLine = currentLine || '';
            if (currentLine.length > 0 || lines.length === 0) {
                lines.push(currentLine);
            }

            this._cache[cacheKey] = lines;
            this._measurementProvider.endMeasurementSession(measurementSession);
            return lines;
        }
    }]);

    return TextWrapper;
}();

module.exports = TextWrapper;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "hull.js":
/*!**************************!*\
  !*** external "hull.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hull.js");

/***/ }),

/***/ "scratch-svg-renderer":
/*!***************************************!*\
  !*** external "scratch-svg-renderer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("scratch-svg-renderer");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "twgl.js":
/*!**************************!*\
  !*** external "twgl.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("twgl.js");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=scratch-render.js.map