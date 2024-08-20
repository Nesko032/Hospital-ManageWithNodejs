"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // Thêm dữ liệu
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                firstName: "Phuc",
                lastName: "Pham",
                email: "example@gmail.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    // Cancel việc thêm dữ liệu
    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
