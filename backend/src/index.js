"use strict";
exports.__esModule = true;
//import express from 'express';
//import bodyParser from 'body-parser';
var routes_1 = require("./routes");
//const routes = require('./routes');
var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//tratamento de erro, pagina não encontrada.
//app.use((req, res, next)=>{
//    res.status(403);
//    res.send('pagina não encontrada');
//});
//pega todas as exceções, ou seja todos os erros.
app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.json({ error: error.message });
});
app.use(routes_1["default"]);
app.listen(3000, function () {
    console.log('Server está rodando');
});
