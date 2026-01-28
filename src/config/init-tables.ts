import fs from 'fs';
import path from 'path';
import dbConnection from './db.ts';

const schemaPath = path.resolve('../migrations/schema.sql');
const sql = fs.readFileSync(schemaPath, 'utf8');

const queries = sql 
    .split(';')
    .map(query => query.trim())
    .filter(query => query.length > 0)

    for (const query of queries) {
        dbConnection.execute(query);
    }

console.log('Tabelas iniciadas com sucesso');
process.exit(0);
