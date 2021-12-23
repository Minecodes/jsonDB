import jsonDB from "../../src/lib/simple";
import { prompt } from "enquirer";
let db = jsonDB("db/", "users.json");
db.load();
const q = [
    {
        type: "input",
        name: "username",
        message: "Enter username:"
    },
];

prompt(q).then((answers: any) => {
    db.addArray("users", {
        username: answers.username,
    });
});
