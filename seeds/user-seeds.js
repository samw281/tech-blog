const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Tim',
    email: 'tim@gmail.com',
    password: 'password123'
  },
  {
    username: 'Sam',
    email: 'sam@gmail.com',
    password: 'password123'
  },
  {
    username: 'Vaughn',
    email: 'vaughn@gmail.com',
    password: 'password123'
  },
  {
    username: 'Cameron',
    email: 'cameron@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
