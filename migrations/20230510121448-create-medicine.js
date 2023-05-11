"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Medicines", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      active_ingredient: {
        type: Sequelize.STRING,
      },
      manufacturer: {
        type: Sequelize.STRING,
      },
      form: {
        type: Sequelize.STRING,
      },
      strength: {
        type: Sequelize.STRING,
      },
      route_of_administration: {
        type: Sequelize.STRING,
      },
      indication: {
        type: Sequelize.STRING,
      },
      contraindication: {
        type: Sequelize.STRING,
      },
      side_effects: {
        type: Sequelize.STRING,
      },
      storage_conditions: {
        type: Sequelize.STRING,
      },
      expiration_date: {
        type: Sequelize.STRING,
      },
      prescription_required: {
        type: Sequelize.BOOLEAN,
      },
      balance: {
        type: Sequelize.INTEGER,
      },
      actionIds: { type: Sequelize.JSON },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Medicines");
  },
};
