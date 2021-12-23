import jsonDB from "../../src/lib/simple";
import { prompt } from "enquirer";
let db = new jsonDB("db/", "users.json");
db.load();
const q = [
    {
        type: "input",
        name: "username",
        message: "Enter username:"
    },
];

prompt(q).then((answers: any) => {
    db.get("users").forEach(user => {
        if (user.username === answers.username) {
            db.removeArray("users", user);
        }
    });
});
