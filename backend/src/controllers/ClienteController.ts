import {Cliente} from '../Cliente';

const knex = require('../database/conector');

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
        const nome = req.body.nome;
        const email = req.body.email; 
        let id = req.params.id;
        console.log(nome);
        console.log(email);
        console.log(id);

        try{
                await knex.raw("update cliente set nome ='" +nome+
                    "', email = '"+ email +"' where id = " + id).toSQL();
                //knex('cliente')
                //.where(knex.raw('id = ?', [id]))
                //.where({id})
                //.update({'nome' : nome, 'email' : email})
                //.where({ id });

                return res.send();
        }catch(error){
            next(error);
        }
    },

    async delete(req, res, next){

        try {

            let id = req.params;
            console.log(id);

            await knex.raw("delete form cliente where id = :id",{id}).toSQL();
            //knex('cliente')
            //.where({ id })
            //.del()            

            return res.send();
        } catch (error) {
            next(error);
        }
    },

    async buscaId (req, res, next){

        let id = req.params;
        console.log(id);

        try {

            const results = await knex('cliente').where({id});
            return res.json(results);
            
        } catch (error) {
            next(error);
        }
    }

}