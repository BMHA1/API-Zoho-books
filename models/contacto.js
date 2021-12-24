'use strict';
const {
  Model, FLOAT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contacto.init({
    contact_id: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    designation: DataTypes.STRING,
    department: DataTypes.STRING,
    website: DataTypes.STRING,
    language_code: DataTypes.STRING,
    language_code_formatted: DataTypes.STRING,
    contact_salutation: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Contacto',
  });
  return Contacto;
};