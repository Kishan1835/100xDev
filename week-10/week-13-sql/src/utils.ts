import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:npg_FqCZHKS60EpW@ep-super-silence-a4d5t3ea-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}