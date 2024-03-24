const express = require('express');
const router = require('./routes/router');
const app = express();
const tabelas = require('../infraestrutura/tabelas');
const conexao = require('../infraestrutura/conexao');

tabelas.init(conexao);

router(app, express);

app.listen(3000, () => {
    console.log('servidor iniciado na porta 3000!')
});