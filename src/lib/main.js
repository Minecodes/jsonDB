"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var jsonDB = (function () {
    function jsonDB(path) {
        this.path = path;
    }
    jsonDB.prototype.getAll = function () {
        return JSON.parse(fs_1["default"].readFileSync(this.path).toString());
    };
    jsonDB.prototype.get = function (key) {
        return JSON.parse(fs_1["default"].readFileSync(this.path).toString())[key];
    };
    jsonDB.prototype.set = function (key, value) {
        var data = JSON.parse(fs_1["default"].readFileSync(this.path).toString());
        data[key] = value;
        fs_1["default"].writeFileSync(this.path, JSON.stringify(data));
    };
    jsonDB.prototype.add = function (key, value) {
        var data = JSON.parse(fs_1["default"].readFileSync(this.path).toString());
        data[key] = value;
        fs_1["default"].writeFileSync(this.path, JSON.stringify(data));
    };
    jsonDB.prototype["delete"] = function (key) {
        var data = JSON.parse(fs_1["default"].readFileSync(this.path).toString());
        delete data[key];
        fs_1["default"].writeFileSync(this.path, JSON.stringify(data));
    };
    return jsonDB;
}());
exports["default"] = jsonDB;
