import jsonDB from '../src/lib/main';
const db = new jsonDB('../db/db.json');
console.log(db.getAll());