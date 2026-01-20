import mysql from 'mysql';

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: '123',
    database: 'my_db'
})

dbConnection.connect()

export default dbConnection;