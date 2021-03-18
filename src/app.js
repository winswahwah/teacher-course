require('dotenv').config()

require('../src/app/configs/database')

const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(helmet())

app.use(require("./app/routes"))

module.exports = app
