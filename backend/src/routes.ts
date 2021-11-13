import { Cliente } from './Cliente';

const express = require('express');
const routes = express.Router();


const ClienteController = require('./controllers/ClienteController');

routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.create);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.delete);

export default routes;