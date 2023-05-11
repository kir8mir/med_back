"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Doctor, {
        as: 'Actions',
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false,
        },
      });
      this.belongsTo(models.Medicines, {
        as: 'Medicines',
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Action.init(
    {
      doctorId: DataTypes.INTEGER,
      medicineId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Action",
    }
  );
  return Action;
};
