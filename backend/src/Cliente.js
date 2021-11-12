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
    Cliente.prototype.montaCliente = function (_a) {
        var id = _a.id, nome = _a.nome, email = _a.email;
        console.log("Montano cliente com id: " + id + ", nome: " + nome + ", email: " + email + " ");
    };
    return Cliente;
}());
exports.Cliente = Cliente;
