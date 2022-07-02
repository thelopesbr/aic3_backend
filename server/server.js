const express = require('express');
const app = express();

const indexRoute = require('./routes/indexRoute');



app.use(express.json())

app.use('/', indexRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
});