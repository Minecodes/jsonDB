declare class jsonDB {
    private file;
    private path;
    private data;
    constructor(path: string, file: string);
    load(): void;
    save(): void;
    get(key: string): any;
    set(key: string, value: any): void;
    remove(key: string): void;
    clear(): void;
    keys(): string[];
    values(): any[];
    has(key: string): boolean;
    size(): number;
    addArray(key: string, value: any): void;
    removeArray(key: string, value: any): void;
    removeArrayItem(key: string, index: number): void;
}
export default jsonDB;
