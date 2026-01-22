import mysql, { type Connection } from 'mysql2';

const dbConnection: Connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'db_teste'
});

dbConnection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados: ", err);
        console.info("Encerrando...");
        process.exit(1);
    }
});

export default dbConnection;