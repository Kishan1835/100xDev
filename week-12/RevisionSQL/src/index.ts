// write a function to create a users table in your database.
import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://tskishan:mysecreatpassword@127.0.0.1:5433/tskishan"
});

async function insertUserData({ username, password, email }: { username: string, password: string, email: string }) {
    await client.connect()
    const result = await client.query(`
        INSERT  INTO USERS (username,password,email)
        VALUES($1,$2,$3)
        `, [username, password, email])
    console.log(result)
}

insertUserData({ username: "RAM", password: "3243", email: "RAMSHARMA.2003@gmail.com" });