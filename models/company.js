'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Company.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    refresh_token: DataTypes.STRING,
    client_id: DataTypes.STRING,
    client_secret: DataTypes.STRING,
    ID_usuario: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};