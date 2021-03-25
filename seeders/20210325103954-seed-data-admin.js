'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'admin',
      username: 'superuser123',
      password: 'admin123',
      email: 'admin@mail.com',
      gender: 'male',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
