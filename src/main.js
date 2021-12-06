"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var commander_1 = require("commander");
var package_json_1 = require("../package.json");
var program = new commander_1.Command();
program.version(package_json_1.version);
program.option("-p, --port <port>", "Set the port (default: 3000)");
program.option("-d, --debug", "Enable debug mode");
program.option("-db, --database <path>", "Set the database file path (default: ./db/db.json)");
program.option("-w, --web", "Enable the web api");
program.parse(process.argv);
var options = program.opts();
var dbFile = options.database || process.env.DB || "./db/db.json";
var port = options.port || process.env.PORT || 3000;
var web = options.web || process.env.WEB || false;
var debug = options.debug || process.env.DEBUG || false;
var main = function () {
    var db = JSON.parse(fs_1["default"].readFileSync(dbFile, "utf8"));
    var dbWrite = function () { return fs_1["default"].writeFileSync(dbFile, JSON.stringify(db)); };
    if (debug) {
        process.on("uncaughtException", function (err) {
            console.error(err);
        });
        console.log("DB: ".concat(dbFile, "\nPort: ").concat(port, "\nDebug: ").concat(debug, "\nWeb: ").concat(web, "\nDB Index:"));
        console.log(db);
    }
    else {
        console.log(db);
    }
};
main();
