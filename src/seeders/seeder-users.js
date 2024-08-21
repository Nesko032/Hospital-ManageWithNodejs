"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // Thêm dữ liệu
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                email: "example@gmail.com",
                password: "123456",
                firstName: "Phuc",
                lastName: "Pham",
                address: "Thu Duc",
                gender: 1,
                typeRole: "ROLE",
                keyRole: "R1",
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
