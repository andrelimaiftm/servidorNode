//import express from 'express';
//import bodyParser from 'body-parser';
import routes from './routes';
//const routes = require('./routes');
const express = require('express');


const app = express();

app.use('/', express.static(__dirname +'/public'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//tratamento de erro, pagina não encontrada.
//app.use((req, res, next)=>{
//    res.status(403);
//    res.send('pagina não encontrada');
//});


//pega todas as exceções, ou seja todos os erros.
app.use((error, req , res, next)=>{
    res.status(error.status || 500);
    res.json({error: error.message});
});

app.use(routes);
app.listen(3000, ()=>{
    console.log('Server está rodando');
});