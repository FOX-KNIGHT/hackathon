const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function initDb() {
    // 1. Connect to 'postgres' database to create 'unixplore' if needed
    const dbConfig = {
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'krrish601',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432'),
    };

    console.log('Connecting to PostgreSQL server...');
    const client = new Client({
        ...dbConfig,
        database: 'postgres',
    });

    try {
        await client.connect();

        // Check if database exists
        const res = await client.query("SELECT 1 FROM pg_database WHERE datname = 'unixplore'");
        if (res.rowCount === 0) {
            console.log("Database 'unixplore' does not exist. Creating...");
            await client.query('CREATE DATABASE unixplore');
            console.log("Database 'unixplore' created successfully.");
        } else {
            console.log("Database 'unixplore' already exists.");
        }
    } catch (err) {
        console.error('Error checking/creating database:', err);
        process.exit(1);
    } finally {
        await client.end();
    }

    // 2. Connect to 'unixplore' database and apply schema
    console.log("Connecting to 'unixplore' database...");
    const appClient = new Client({
        ...dbConfig,
        database: 'unixplore',
    });

    try {
        await appClient.connect();

        const schemaPath = path.join(__dirname, '../src/lib/db/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log('Applying schema...');
        await appClient.query(schemaSql);
        console.log('Schema applied successfully.');

    } catch (err) {
        console.error('Error applying schema:', err);
        process.exit(1);
    } finally {
        await appClient.end();
    }
}

initDb();
