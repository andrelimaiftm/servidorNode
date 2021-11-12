"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes = (0, express_1.Router)();
var UserController = require('./controllers/ClienteController');
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
routes.get('/clientes', UserController.index);
/*connection.query('select * from cliente', function (err: any, rows: any, field: any) {
    if (err)
        throw err;
    console.log("select realizado");
    res.json(rows);
});*/
//});
routes.post('/cliente', UserController.create); //(req,res)=>{
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
routes.put('/cliente/:id', UserController.update); //(req, res)=>{
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
routes["delete"]('delete/id', function (req, res) {
    /*let id = req.body.id;
    connection.query('delete from cliente where clienteId = ?', [id], function (err: any, rows: any, field: any) {
        if (err)
            throw err;
        console.log("atualizou o cadastro de cliente");
    });*/
});
exports["default"] = routes;
