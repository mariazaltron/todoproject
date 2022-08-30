"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Luis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Victoria",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
