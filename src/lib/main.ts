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
//#endregion

class jsonDB {
    //#region properties
    private path: string;
    //#endregion

    //#region constructor
    constructor(path: string) {
        this.path = path;
    }
    //#endregion

    getAll(): JSON {
        return JSON.parse(fs.readFileSync(this.path).toString());
    }

    get(key: string): any {
        return JSON.parse(fs.readFileSync(this.path).toString())[key];
    }

    set(key: string, value: any): void {
        let data = JSON.parse(fs.readFileSync(this.path).toString());
        data[key] = value;
        fs.writeFileSync(this.path, JSON.stringify(data));
    }

    add(key: string, value: any): void {
        let data = JSON.parse(fs.readFileSync(this.path).toString());
        data[key] = value;
        fs.writeFileSync(this.path, JSON.stringify(data));
    }
    
    delete(key: string): void {
        let data = JSON.parse(fs.readFileSync(this.path).toString());
        delete data[key];
        fs.writeFileSync(this.path, JSON.stringify(data));
    }
}

export default jsonDB;