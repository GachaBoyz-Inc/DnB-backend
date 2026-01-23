import mysql, { type Connection } from 'mysql2';

const dbConnection: Connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    port: parseInt(process.env.DB_PORT || '3306'),
    password: process.env.DB_PWD || '',
    database: process.env.DB_NAME || 'db_teste'
});

dbConnection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados: ", err);
        console.info("Encerrando...");
        process.exit(1);
    }
});

export default dbConnection;