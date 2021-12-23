"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
function jsonDB(path, file) {
    var json = {
        data: {},
        path: path,
        file: file
    };
    function load() {
        json.data = JSON.parse(fs_1["default"].readFileSync(json.path + json.file, "utf8"));
    }
    function save() {
        fs_1["default"].writeFileSync(json.path + json.file, JSON.stringify(json.data));
    }
    function get(key) {
        return json.data[key];
    }
    function set(key, value) {
        json.data[key] = value;
        save();
    }
    function remove(key) {
        delete json.data[key];
        save();
    }
    function clear() {
        json.data = {};
        save();
    }
    function keys() {
        return Object.keys(json.data);
    }
    function values() {
        return Object.values(json.data);
    }
    function has(key) {
        return json.data.hasOwnProperty(key);
    }
    function size() {
        return Object.keys(json.data).length;
    }
    function addArray(key, value) {
        if (!json.data[key])
            json.data[key] = [];
        json.data[key].push(value);
        save();
    }
    function removeArray(key, value) {
        if (!json.data[key])
            return;
        json.data[key].splice(json.data[key].indexOf(value), 1);
        save();
    }
    function removeArrayItem(key, index) {
        if (!json.data[key])
            return;
        json.data[key].splice(index, 1);
        save();
    }
    return {
        load: load,
        save: save,
        get: get,
        set: set,
        remove: remove,
        clear: clear,
        keys: keys,
        values: values,
        has: has,
        size: size,
        addArray: addArray,
        removeArray: removeArray,
        removeArrayItem: removeArrayItem
    };
}
exports["default"] = jsonDB;
