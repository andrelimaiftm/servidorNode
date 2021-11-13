"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.setId = function (valor) {
        this.id = valor;
    };
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.setNome = function (valor) {
        this.nome = valor;
    };
    Cliente.prototype.getEmail = function () {
        return this.email;
    };
    Cliente.prototype.setEmail = function (valor) {
        this.email = valor;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
