// src/infrastructure/db/connection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loantap', 'vishal', 'vishal', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
