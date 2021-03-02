"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("posts", [
      {
        title: "My post 1",
        description: "My description 1",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "My post 2",
        description: "My description 2",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "My post 3",
        description: "My description 3",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null);
  },
};
