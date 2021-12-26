'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer.init({
    contact_id: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    customer_name: DataTypes.STRING,
    vendor_name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    website: DataTypes.STRING,
    language_code: DataTypes.STRING,
    language_code_formatted: DataTypes.STRING,
    contact_type: DataTypes.STRING,
    contact_type_formatted: DataTypes.STRING,
    status: DataTypes.STRING,
    customer_sub_type: DataTypes.STRING,
    source: DataTypes.STRING,
    is_linked_with_zohocrm: DataTypes.BOOLEAN,
    payment_terms: DataTypes.STRING,
    payment_terms_label: DataTypes.STRING,
    currency_id: DataTypes.STRING,
    twitter: DataTypes.STRING,
    facebook: DataTypes.STRING,
    currency_code: DataTypes.STRING,
    outstanding_receivable_amount: DataTypes.STRING,
    outstanding_receivable_amount_bcy: DataTypes.STRING,
    outstanding_payable_amount: DataTypes.STRING,
    outstanding_payable_amount_bcy: DataTypes.STRING,
    unused_credits_receivable_amount: DataTypes.STRING,
    unused_credits_payable_amount: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    portal_status: DataTypes.STRING,
    created_time: DataTypes.STRING,
    created_time_formatted: DataTypes.STRING,
    last_modified_time: DataTypes.STRING,
    last_modified_time_formatted: DataTypes.STRING,
    custom_fields: DataTypes.STRING,
    custom_field_hash: DataTypes.STRING,
    ach_supported: DataTypes.BOOLEAN,
    has_attachment: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};