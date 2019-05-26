// Requirindo as bibliotecas

const express = require('express');

// Faz a conversão de dados  exemplo: pode receber um JSON e converter para um objeto JavaScript.
// Facilita os campos que usuario passa.
const bodyparser = require('body-parser');

// Resolve os problemas de seguranças
const cors = require('cors');
// Fim bibliotecas

// Instanciando o Express
const api = express();

// Definindo a porta - Vamos utilizar o Express para escutar essa Porta
const porta = 3000;

// Definindo uma Rota - Proprio express tem
const router = express.Router();

// Tratamento da Rota
const galeriaRouter = require('./router/galeriaRouter');

// Cors vai tratar de receber as requisições e vai responder as requisições
api.use(cors());

// urlencoded - recupera as informações , ouvi o URL e ele fazer um parse para que possamos manipular e sair através do javascript.
//api.use(bodyparser.urlencoded({extended : true}));
//api.use(bodyparser.json({limit: '20mb', extended : true}));

api.use(bodyparser.json({limit: '200mb'}));
api.use(bodyparser.json({limit: '200mb', extended : true}));

api.use('/public' , express.static(__dirname + '/public'));

router.get("/", (req, resp) => resp.json({
    mensagem: '=> API Online...'
}));

api.use("/", router);
api.use("/galeria", galeriaRouter);
api.listen(porta);
console.log("Run API express");