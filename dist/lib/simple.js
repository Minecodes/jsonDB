"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var fs_1 = __importDefault(require("fs"));

var jsonDB = function () {
  function jsonDB(path, file) {
    this.data = {};
    this.path = path;
    this.file = file;
    this.load();
  }

  jsonDB.prototype.load = function () {
    this.data = JSON.parse(fs_1["default"].readFileSync(this.path + this.file, "utf8"));
  };

  jsonDB.prototype.save = function () {
    fs_1["default"].writeFileSync(this.path + this.file, JSON.stringify(this.data));
  };

  jsonDB.prototype.get = function (key) {
    return this.data[key];
  };

  jsonDB.prototype.set = function (key, value) {
    this.data[key] = value;
    this.save();
  };

  jsonDB.prototype.remove = function (key) {
    delete this.data[key];
    this.save();
  };

  jsonDB.prototype.clear = function () {
    this.data = {};
    this.save();
  };

  jsonDB.prototype.keys = function () {
    return Object.keys(this.data);
  };

  jsonDB.prototype.values = function () {
    return Object.values(this.data);
  };

  jsonDB.prototype.has = function (key) {
    return this.data.hasOwnProperty(key);
  };

  jsonDB.prototype.size = function () {
    return Object.keys(this.data).length;
  };

  jsonDB.prototype.addArray = function (key, value) {
    if (!this.data[key]) this.data[key] = [];
    this.data[key].push(value);
    this.save();
  };

  jsonDB.prototype.removeArray = function (key, value) {
    if (!this.data[key]) return;
    this.data[key].splice(this.data[key].indexOf(value), 1);
    this.save();
  };

  jsonDB.prototype.removeArrayItem = function (key, index) {
    if (!this.data[key]) return;
    this.data[key].splice(index, 1);
    this.save();
  };

  return jsonDB;
}();

exports["default"] = jsonDB;