//import { Router } from 'express';
import {Cliente} from './Cliente';

const express = require('express');
const routes = express.Router();


const ClienteController = require('./controllers/ClienteController');



//var mysql = require('mysql');

/*var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'banco'
});

connection.connect(function (err: any) {
    if (err)
        throw err;
});*/

routes.get('/clientes', ClienteController.index);
    /*connection.query('select * from cliente', function (err: any, rows: any, field: any) {
        if (err)
            throw err;
        console.log("select realizado");
        res.json(rows);
    });*/
//});

routes.post('/clientes', ClienteController.create); //(req,res)=>{
    /*let nome = req.body.nome;
    let email = req.body.email;        
    let cliente = new Cliente(0, nome, email);
    connection.query('insert into cliente (nome, email) values (?, ? );', [cliente.getNome(), cliente.getEmail()], function (err: any, rows: any, field: any) {
        if (err)
            throw err;
        console.log("inseriu cadastro de cliente");
    });
    res.send("/index.html");*/
//});

routes.put('/clientes/:id', ClienteController.update);//(req, res)=>{
    /*let id = req.body.id;
    let nome = req.body.nome;
    let email = req.body.email;
    let cliente = new Cliente(id,nome,email);
    connection.query('update cliente set nome = ?, email = ? where clienteId = ?', [cliente.getNome(), cliente.getEmail(), cliente.getId()], function (err: any, rows: any, field: any) {
        if (err)
            throw err;
        console.log("atualizou o cadastro de cliente");
    });*/
//});

routes.delete('/clientes/:id', ClienteController.delete);//(req, res)=>{
    /*let id = req.body.id;    
    connection.query('delete from cliente where clienteId = ?', [id], function (err: any, rows: any, field: any) {
        if (err)
            throw err;
        console.log("atualizou o cadastro de cliente");
    });*/
//});



export default routes;