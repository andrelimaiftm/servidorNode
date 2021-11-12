import {Cliente} from '../Cliente';



const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '12345678',
      database : 'banco'
    }
  });

module.exports = {
    async index(req,res){
        const results = await knex('cliente');
        return res.json(results);
    },

    async create(req, res, next){
        let nome = req.body.nome;
        let email = req.body.email;        
        //let cliente = new Cliente(0, nome, email);
        
        try{
            await knex('cliente').insert({
                nome, email
            });
            return res.status(201).send();
        }catch (error){
            next(error);
        }  
        
    },

    async update(req, res, next){
        let nome: string = req.body.nome;
        let email: string = req.body.email; 
        let id:number = req.params;
        console.log(id);
        try{
                await knex('cliente').update({nome, email})
                .where({'idcliente' : id });

                return res.status(201).send();
        }catch(error){
            next(error);
        }
    }

}