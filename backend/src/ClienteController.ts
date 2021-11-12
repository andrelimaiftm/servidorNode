import {Request, Response} from 'express';
import { Cliente } from './Cliente';

const clientes = [
    { name: 'Andre', email: 'andrelima@iftm.edu.br'
}];

export default{
    async index(req: Request, res: Response){
        return res.json(clientes);
    },

    async create(req: Request, res: Response){
        let nome = req.body.nome;
        let email = req.body.email;        
        let cliente = new Cliente(0, nome, email);

        //cliente.montaCliente(cliente);
        return res.json(clientes);
    }
}