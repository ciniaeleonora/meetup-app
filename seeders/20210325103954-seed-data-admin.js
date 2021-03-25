'use strict';

const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(7)


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [
      {
        name: 'admin',
        username: 'superuser',
        password: bcrypt.hashSync('123',salt),
        email: 'admin@mail.com',
        gender: 'male',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'nia',
        username: 'nia',
        password: bcrypt.hashSync('123',salt),
        email: 'nia@mail.com',
        gender: 'female',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'users',
        username: 'users',
        password: bcrypt.hashSync('123',salt),
        email: 'user@mail.com',
        gender: 'male',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
