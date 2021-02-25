'use strict'

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        profession: 'Admin User',
        role: 'admin',
        email: 'abi@mail.com',
        password: await bcrypt.hash('rahasia123', 10),
      },
      {
        name: 'Student',
        profession: 'Programmer',
        role: 'student',
        email: 'student@mail.com',
        password: await bcrypt.hash('rahasiaku123', 10),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}
