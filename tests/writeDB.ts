import jsonDB from "../src/lib/simple";
let db = new jsonDB("db/db.json");

console.log(db.init());