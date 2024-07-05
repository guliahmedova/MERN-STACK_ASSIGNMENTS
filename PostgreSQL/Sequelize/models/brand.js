const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Brand = sequelize.define('brands', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    }
});

module.exports = Brand;