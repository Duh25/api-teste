const express = require('express')

const router = require('./routes/router')

const setupSwagger = require('./config/swagger')

const app = express()

app.use(express.json())

setupSwagger(app)

app.use('/', router)

module.exports = app
