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

class jsonDB {
    private file: string;
    private path: string;
    private data = {};

    constructor(path: string, file: string) {
        this.path = path;
        this.file = file;
        this.load();
    }

    load(): void {
        this.data = JSON.parse(fs.readFileSync(this.path + this.file, "utf8"));
    }

    save(): void {
        fs.writeFileSync(this.path + this.file, JSON.stringify(this.data));
    }

    get(key: string): any {
        return this.data[key];
    }

    set(key: string, value: any): void {
        this.data[key] = value;
        this.save();
    }

    remove(key: string): void {
        delete this.data[key];
        this.save();
    }

    clear(): void {
        this.data = {};
        this.save();
    }
    
    keys(): string[] {
        return Object.keys(this.data);
    }
    
    values(): any[] {
        return Object.values(this.data);
    }

    has(key: string): boolean {
        return this.data.hasOwnProperty(key);
    }

    size(): number {
        return Object.keys(this.data).length;
    }

    addArray(key: string, value: any): void {
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(value);
        this.save();
    }

    removeArray(key: string, value: any): void {
        if (!this.data[key]) return;
        this.data[key].splice(this.data[key].indexOf(value), 1);
        this.save();
    }
    
    removeArrayItem(key: string, index: number): void {
        if (!this.data[key]) return;
        this.data[key].splice(index, 1);
        this.save();
    }
}

export default jsonDB;