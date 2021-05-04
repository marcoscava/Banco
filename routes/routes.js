const { Router } = require ('express');
/* IMPORTAR CONTROLLERS */

const agenciaController = require('../controllers/agenciaController');
const bancoController = require('../controllers/bancoController');
const clienteController = require('../controllers/clienteController');

const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).send({mensagem: "Funcionando!"});
})

/* ROTAS GET */
routes.get('/clientes', clienteController.getAll);
routes.get('/agencias', agenciaController.getAll);
routes.get('/bancos', bancoController.getAll);

/* ROTAS POST */
routes.post('/cliente', clienteController.create);
routes.post('/agencia', agenciaController.create);
routes.post('/banco', bancoController.create);


module.exports = routes;