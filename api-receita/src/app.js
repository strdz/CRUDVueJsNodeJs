
const express = require('express');
const cors = require('cors');


const app = express();

// ==> Rotas da API ():
const index = require('./routes/index');
const routes = require('./routes/routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', routes);

module.exports = app;