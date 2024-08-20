"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("schedules", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            currentNumber: {
                type: Sequelize.INTEGER,
            },
            maxNumber: {
                type: Sequelize.INTEGER,
            },
            date: {
                type: Sequelize.DATE,
            },
            timeType: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            doctorId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("schedules");
    },
};
