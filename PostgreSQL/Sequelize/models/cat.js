const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Cat = sequelize.define('cats', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = Cat;