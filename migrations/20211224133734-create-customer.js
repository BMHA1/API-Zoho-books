'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contact: {
        type: Sequelize.STRING
      },
      contact_id: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: false,
        type: Sequelize.DATE
      },
      designation: {
        allowNull: false,
        type: Sequelize.DATE
      },
      department: {
        allowNull: false,
        type: Sequelize.DATE
      },
      website: {
        allowNull: false,
        type: Sequelize.DATE
      },
      language_code: {
        allowNull: false,
        type: Sequelize.DATE
      },
      language_code_formatted: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Customers');
  }
};