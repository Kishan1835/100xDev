import { Client } from "pg";


const client = new Client({
  connectionString: "postgresql://kishan:1234@localhost:5432/postgres?schema=public"
})

// cretaing ean users table is the POstSQL

async function createTable() {
  await client.connect();
  const response = await client.query(
    `CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
           );`
  )
  console.log(response);

}
// createTable();

async function insetIntoTable() {
  const query = `INSERT INTO users (username, email, password) VALUES ('kishan', 'ksiahn@test.com', 'password-hashed')`;
  console.log(query);
  const response = await client.query(query);
  console.log(response);
}

// insetIntoTable();

async function updateTable() {
  await client.connect();

  const newUsername = "Nayan";
  const user_id = 1;

  const updateQuery = `UPDATE users SET username = $1 WHERE id = $2`;
  const values = [newUsername, user_id];

  console.log(updateQuery);
  const response = await client.query(updateQuery, values);
  console.log(response);
}

updateTable();