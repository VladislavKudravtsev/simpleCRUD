"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        firstName: "Mike",
        lastName: "Mushrooms",
        email: "mikemushrooms@gmail.com",
        password: "mike12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "John",
        lastName: "Red",
        email: "johnred@gmail.com",
        password: "john12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
