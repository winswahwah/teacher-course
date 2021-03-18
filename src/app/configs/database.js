require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION)

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.')
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error)
    })
