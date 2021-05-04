'use strict';

		module.exports = {
  		up: async (queryInterface, Sequelize) => {
    
    		await queryInterface.createTable('agencia', {
      		agenciaId: {
        		allowNull: false,
        		autoIncrement: true,
        		primaryKey: true,
        		type: Sequelize.INTEGER
      		},
      		numeroAgencia: {
        		allowNull: false,
        		type: Sequelize.INTEGER
      		},
      		descricaoAgencia: {
        		allowNull: false,
        		type: Sequelize.STRING
      		},
          	idBanco: {
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
      		}
    		})
    
  		}
    }