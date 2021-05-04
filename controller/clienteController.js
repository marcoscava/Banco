const { cliente, cpf } = require ('../models/');

class clienteController {
    async getAll(req,res) {
        try {
            const clientes = await cliente.findAll({
                include: [{
                    model: cliente, 
                    as: "cliente"                   
                }]
            })
            res.status(200).json(Clientes);
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async create(req,res) {
        try {
            let cpfRes = await cpf.findByPk(req.body.clienteId);       
            if (!cpfRes) {
                throw new Error('CPF não existe')
            }
            else {
                let cliente = {
                    nome: req.body.nome,
                    nivel: Number(req.body.nivel),
                    clienteId: Number(req.body.clienteId),
                    nome: req.body.nome,
                    cpf: Number(req.body.cpf),
                    sexo: req.body.sexo,
                    salario: Number(req.body.salario),
                    contato: Number(req.body.contato)
                }
                console.log(cliente);
                const clienteRes = await cliente.create(cliente);
                res.status(200).json(clienteRes);
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }
}

module.exports = new clienteController();