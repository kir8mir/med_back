'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medicine.init({
    name: DataTypes.STRING,
    active_ingredient: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    form: DataTypes.STRING,
    strength: DataTypes.STRING,
    route_of_administration: DataTypes.STRING,
    indication: DataTypes.STRING,
    contraindication: DataTypes.STRING,
    side_effects: DataTypes.STRING,
    storage_conditions: DataTypes.STRING,
    expiration_date: DataTypes.STRING,
    prescription_required: DataTypes.BOOLEAN,
    balance: DataTypes.INTEGER,
    actionIds: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Medicine',
  });
  return Medicine;
};