const config = require('../config/config')
const sequelize = require('sequelize')

const Users = config.define('users', {
    id: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    username: { 
        type: sequelize.STRING,
        allowNull: false,
    },
    email: { 
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: { 
        type: sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Users
