//#region imports
import fs from "fs";
/**
 * @name jsonDB
 * @description An simple database created with Typescript and a single JSON file
 * @author Minecodes <minecodes13@gmail.com>
 * @license MIT
 * @version 1.0.0
 * @namespace jsonDB
 */

import { Command } from "commander";
import { version } from "../package.json";
//#endregion

//#region constants
const program = new Command();
program.version(version);
program.option("-p, --port <port>", "Set the port (default: 3000)");
program.option("-d, --debug", "Enable debug mode");
program.option("-db, --database <path>", "Set the database file path (default: ./db/db.json)");
program.option("-w, --web", "Enable the web api");
program.parse(process.argv);
const options = program.opts();
const dbFile = options.database || process.env.DB || "./db/db.json";
const port = options.port || process.env.PORT || 3000;
const web = options.web || process.env.WEB || false;
const debug = options.debug || process.env.DEBUG || false;
//#endregion

const main = () => {
    //#region database
    let db = JSON.parse(fs.readFileSync(dbFile, "utf8"));
    const dbWrite = () => fs.writeFileSync(dbFile, JSON.stringify(db));
    //#endregion

    if (debug) {
        process.on("uncaughtException", (err) => {
            console.error(err);
        });
        console.log(`DB: ${dbFile}
Port: ${port}
Debug: ${debug}
Web: ${web}
DB Index:`);
        console.log(db);
    } else {
        console.log(db);
    }
    
//    //#region server
//    const server = require("./src/server").default;
//    const serverStart = async () => {
//        const app = await server(db, dbWrite);
//        app.listen(port, () => {
//        console.log(`Server started on port ${port}`);
//        });
//    };
//    //#endregion
//    //#region web
//    if (web) {
//        const webServer = require("./src/web").default;
//        const webStart = async () => {
//        const app = await webServer(db, dbWrite);
//        app.listen(port + 1, () => {
//            console.log(`Web server started on port ${port + 1}`);
//        });
//        };
//        webStart();
//    }
//    //#endregion
//    //#region start
//    serverStart();
//    //#endregion
};

//#region run
main()
//#endregion