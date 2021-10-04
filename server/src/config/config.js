const Sequelize = require('sequelize')
const { DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST } = require('./env')

const config = new Sequelize(
    DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'postgres',
        omitNull: true,
        pool: {
            max: 5,
            min: 0,
            scuire: 300000,
            idle: 10000
        }
    }
)

module.exports = config