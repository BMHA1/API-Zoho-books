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
    contact:DataTypes.STRING,
    contact_id:DataTypes.STRING,
    company_name:DataTypes.STRING,
    first_name:DataTypes.STRING,
    last_name:DataTypes.STRING,
    designation:DataTypes.STRING,
    department:DataTypes.STRING,
    website:DataTypes.STRING,
    language_code:DataTypes.STRING,
    language_code_formatted: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};