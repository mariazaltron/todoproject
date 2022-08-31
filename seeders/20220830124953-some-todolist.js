"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Luis's TodoList",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria's TodoList",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Victoria's Todolist",
          userId: 3,
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
