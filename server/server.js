require('dotenv').config();

const express = require('express');
const app = express();

// ROTAS
const indexRoute = require('./routes/indexRoute');
const initRoute = require('./routes/initRoute');
const subscribeRoute = require('./routes/subscribeRoute');

app.use(express.json())

app.use('/init', initRoute);

app.use('/', indexRoute);
app.use('/subscribe', subscribeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
});