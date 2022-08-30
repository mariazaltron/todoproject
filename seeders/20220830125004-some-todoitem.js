"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Go to the supermarket",
          deadline: "Monday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Clean the oven",
          deadline: "Saturday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Clean the windows",
          deadline: "Sunday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
