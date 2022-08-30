"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Luis",
          email: "luis@gmail.com",
          phone: 123456,
          password: "test1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria",
          email: "maria@gmail.com",
          phone: 123457,
          password: "test2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Victoria",
          email: "victora@gmail.com",
          phone: 123458,
          password: "test3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
