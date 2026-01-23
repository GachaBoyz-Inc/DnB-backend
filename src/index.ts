import dbConnection from "./config/db.js";
import app from "./server/server.js";

app.get('/', (req, res) => {
  try {
    dbConnection.query("SELECT * FROM usuario", ((err, query) => {
      if (err) {
        res.send("Erro ao executar query");
      }

      res.send(query);
    }))
  } catch (e: any) {
    res.send("Erro ao mostrar algo do banco")
  }
});