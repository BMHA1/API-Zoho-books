'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Customers', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contact_id: {
        type: Sequelize.STRING,
        unique: true
      },
      contact_name: {
        type: Sequelize.STRING
      },
      customer_name: {
        type: Sequelize.STRING
      },
      vendor_name: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      language_code: {
        type: Sequelize.STRING
      },
      language_code_formatted: {
        type: Sequelize.STRING
      },
      contact_type: {
        type: Sequelize.STRING
      },
      contact_type_formatted: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      customer_sub_type: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      is_linked_with_zohocrm: {
        type: Sequelize.BOOLEAN
      },
      payment_terms: {
        type: Sequelize.STRING
      },
      payment_terms_label: {
        type: Sequelize.STRING
      },
      currency_id: {
        type: Sequelize.STRING
      },
      currency_id: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      currency_code: {
        type: Sequelize.STRING
      },
      outstanding_receivable_amount: {
        type: Sequelize.STRING
      },
      outstanding_receivable_amount_bcy: {
        type: Sequelize.STRING
      },
      outstanding_payable_amount: {
        type: Sequelize.STRING
      },
      outstanding_payable_amount_bcy: {
        type: Sequelize.STRING
      },
      unused_credits_receivable_amount: {
        type: Sequelize.STRING
      },
      unused_credits_payable_amount: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      portal_status: {
        type: Sequelize.STRING
      },
      created_time: {
        type: Sequelize.STRING
      },
      created_time_formatted: {
        type: Sequelize.STRING
      },
      last_modified_time: {
        type: Sequelize.STRING
      },
      last_modified_time_formatted: {
        type: Sequelize.STRING
      },
      custom_fields: {
        type: Sequelize.STRING
      },
      custom_field_hash: {
        type: Sequelize.STRING
      },
      ach_supported: {
        type: Sequelize.BOOLEAN
      },
      has_attachment: {
        type: Sequelize.BOOLEAN
      }, createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Customers');
  }
};