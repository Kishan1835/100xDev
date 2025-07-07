"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://tskishan:mysecreatpassword@127.0.0.1:5433/tskishan"
});
function insertUserData(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password, email }) {
        yield client.connect();
        const result = yield client.query(`
        INSERT  INTO USERS (username,password,email)
        VALUES($1,$2,$3)
        `, [username, password, email]);
        console.log(result);
    });
}
insertUserData({ username: "RAM", password: "3243", email: "RAMSHARMA.2003@gmail.com" });
