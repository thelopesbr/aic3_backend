require('dotenv').config();

const express = require('express');
const app = express();

// ROTAS
const apiRoute = require('./routes/apiRoute');
const subscribeRoute = require('./routes/subscribeRoute');

app.use(express.json())

app.use('/api', apiRoute);
app.use('/subscribe', subscribeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
});