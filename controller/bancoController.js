const { banco, idBanco } = require ('../models/');
const cliente = require('../models/cliente');

class bancoController {
    async getAll(req,res) {
        try {
            const banco = await banco.findAll({
                include: [{
                    model: banco, 
                    as: "banco"                   
                }]
            })
            res.status(200).json(Bancos);
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async getAllByNome ( req,res ) {
        let nome = '%' + req.query.nome + '%';
        try {
            const clientes = await cliente.findAll({
                where: {
                    nome: {
                        [Op.like]: nome
                    }
                }
            });
            if ( clientes )
                return res.status(200).json(clientes);
            else
                return res.status(400).json({error: err.message}) 
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async create(req,res) {
        try {
            let bancoIdRes = await bancoId.findByPk(req.body.bancoId);       
            if (!bancoIdRes) {
                throw new Error('Banco não existe')
            }
            else {
                let banco = {
                    bancoId:Number(req.body.agenciaId),
                    numeroAgencia:Number(req.body.numeroAgencia),
                    descricaoAgencia:req.body.descricaoAgencia,
                    idBanco:Number(req.body.idBanco),
                }
                console.log(banco);
                const bancoRes = await banco.create(banco);
                res.status(200).json(bancoRes);
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }
}

module.exports = new bancoController();