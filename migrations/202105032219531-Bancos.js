'use strict';

		module.exports = {
  		up: async (queryInterface, Sequelize) => {
    
    		await queryInterface.createTable('banco', {
      		bancoId: {
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
        		type: Sequelize.INTEGER,
            references: {
              model: 'Agencia',
              key: 'agenciaId',
              as: 'bancoId'
            },
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