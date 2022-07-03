require('dotenv').config();

const express = require('express');
const app = express();

// ROTAS
const indexRoute = require('./routes/indexRoute');
const subscribeRoute = require('./routes/subscribeRoute');

app.use(express.json())

app.use('/', indexRoute);
app.use('/subscribe', subscribeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
});