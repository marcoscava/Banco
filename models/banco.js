module.exports = (sequelize, Sequelize) => {
    const banco = sequelize.define("banco", {
        bancoId: Sequelize.INTEGER,
        numeroAgencia: Sequelize.INTEGER,
        descricaoAgencia: Sequelize.STRING,
        idBanco: Sequelize.INTEGER
    });

    return banco;
}