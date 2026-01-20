import express from 'express'
import dotenv from 'dotenv';

dotenv.config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.listen(port, () => {
  console.log(`Exemplo de app rodando em http://localhost:${port}`)
})