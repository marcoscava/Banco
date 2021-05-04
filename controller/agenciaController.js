const { agencia, numeroAgencia } = require ('../models/');

class agenciaController {
    async getAll(req,res) {
        try {
            const agencia = await agencia.findAll({
                include: [{
                    model: agencia, 
                    as: "agencia"                   
                }]
            })
            res.status(200).json(Agencias);
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async create(req,res) {
        try {
            let agenciaIdRes = await agenciaId.findByPk(req.body.agenciaId);       
            if (!agenciaIdRes) {
                throw new Error('Agencia não existe')
            }
            else {
                let agencia = {
                    agenciaId: Number(req.body.agenciaId),
                    numeroAgencia: Number(req.body.numeroAgencia),
                    descricaoAgencia: req.body.descricaoAgencia,
                    idBanco: Number(req.body.idBanco)
                }
                console.log(agencia);
                const agenciaRes = await agencia.create(agencia);
                res.status(200).json(agenciaRes);
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }
}

module.exports = new agenciaController();