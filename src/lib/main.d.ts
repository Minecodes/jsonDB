declare class jsonDB {
    private path;
    constructor(path: string);
    getAll(): JSON;
    get(key: string): any;
    set(key: string, value: any): void;
    add(key: string, value: any): void;
    delete(key: string): void;
}
export default jsonDB;
