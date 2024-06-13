// src/infrastructure/db/models/UserModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'users',
});

module.exports = UserModel;
