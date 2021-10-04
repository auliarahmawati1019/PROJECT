const Sequelize = require('sequelize')
const config = require('../config/config')
const UsersService = require('./UsersService')

module.exports = {
    sequelize: config,
    Sequelize,
    UsersService
}