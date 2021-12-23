import jsonDB from "../src/lib/simple";
let db = jsonDB("db/", "users.json");
db.load();
console.log(db.get("users"));
