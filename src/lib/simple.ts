/**
 * @name jsonDB
 * @description An simple database created with Typescript and a single JSON file
 * @author Minecodes <minecodes13@gmail.com>
 * @license MIT
 * @version 1.0.0
 * @namespace lib.jsonDB
 */

//#region imports
import fs from "fs";
import { arrayBuffer } from "stream/consumers";
//#endregion

function jsonDB(path: string, file: string) {
    //#region private
    const json = {
        data: {},
        path: path,
        file: file
    };

    function load(): void {
        json.data = JSON.parse(fs.readFileSync(json.path + json.file, "utf8"));
    }

    function save(): void {
        fs.writeFileSync(json.path + json.file, JSON.stringify(json.data));
    }

    function get(key: string): any {
        return json.data[key];
    }

    function set(key: string, value: any): void {
        json.data[key] = value;
        save();
    }

    function remove(key: string): void {
        delete json.data[key];
        save();
    }

    function clear(): void {
        json.data = {};
        save();
    }
    
    function keys(): string[] {
        return Object.keys(json.data);
    }
    
    function values(): any[] {
        return Object.values(json.data);
    }

    function has(key: string): boolean {
        return json.data.hasOwnProperty(key);
    }

    function size(): number {
        return Object.keys(json.data).length;
    }

    function addArray(key: string, value: any): void {
        if (!json.data[key]) json.data[key] = [];
        json.data[key].push(value);
        save();
    }

    function removeArray(key: string, value: any): void {
        if (!json.data[key]) return;
        json.data[key].splice(json.data[key].indexOf(value), 1);
        save();
    }
    
    function removeArrayItem(key: string, index: number): void {
        if (!json.data[key]) return;
        json.data[key].splice(index, 1);
        save();
    }
    //#endregion

    //#region public
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
    //#endregion
}

export default jsonDB;