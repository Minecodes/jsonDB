import { exit } from 'process';
import jsonDB from '../src/lib/main';
const db = new jsonDB('db/db.json');
db.delete("homepage");
db.delete("hi");
db.add("hi", "hello")
exit(0);