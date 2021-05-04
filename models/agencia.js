module.exports = (sequelize, Sequelize) => {
    const agencia = sequelize.define("agencia", {
        agenciaId:Sequelize.INTEGER,
        numeroAgencia: Sequelize.INTEGER,
        descricaoAgencia: Sequelize.STRING,
        idBanco: Sequelize.INTEGER
    });

    agencia.associate = (models) => {
        agencia.belongsTo(models.banco, {
            foreingKey: 'id',
            as: 'idBanco'            
        })
    }
    return agencia;
}