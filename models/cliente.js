module.exports = (sequelize, Sequelize) => {
    const cliente = sequelize.define("cliente", {
        clienteId: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        cpf: Sequelize.INTEGER,
        sexo: Sequelize.STRING,
        salario: Sequelize.INTEGER,
        contato: Sequelize.INTEGER
    });

    return cliente;
}