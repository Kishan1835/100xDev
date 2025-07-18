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
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://kishan:1234@localhost:5432/postgres?schema=public"
});
// cretaing ean users table is the POstSQL
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const response = yield client.query(`CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
           );`);
        console.log(response);
    });
}
// createTable();
function insetIntoTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `INSERT INTO users (username, email, password) VALUES ('kishan', 'ksiahn@test.com', 'password-hashed')`;
        console.log(query);
        const response = yield client.query(query);
        console.log(response);
    });
}
// insetIntoTable();
function updateTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const newUsername = "Nayan";
        const user_id = 1;
        const updateQuery = `UPDATE users SET username = $1 WHERE id = $2`;
        const values = [newUsername, user_id];
        console.log(updateQuery);
        const response = yield client.query(updateQuery, values);
        console.log(response);
    });
}
updateTable();
