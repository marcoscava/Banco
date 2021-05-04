'use strict';

		module.exports = {
  		up: async (queryInterface, Sequelize) => {
    
    		await queryInterface.createTable('cliente', {
      		clienteId: {
        		allowNull: false,
        		autoIncrement: true,
        		primaryKey: true,
        		type: Sequelize.INTEGER
      		},
      		nome: {
        		allowNull: false,
        		type: Sequelize.STRING
      		},
      		cpf: {
        		allowNull: false,
        		type: Sequelize.INTEGER
          },
          sexo: {
        		allowNull: false,
        		type: Sequelize.STRING
      		},
          salario: {
        		allowNull: false,
        		type: Sequelize.INTEGER
      		},
          contato: {
        		allowNull: false,
        		type: Sequelize.INTEGER
      		},
      		createdAt: {
        		allowNull: false,
        		type: Sequelize.DATE
      		},
      		updateAt: {
        		allowNull: false,
        		type: Sequelize.DATE
      		},
    		})
    
  		}
    }