const express = require('express')

const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

const router = require('./routes/router')

const app = express()

app.use(express.static(pathToSwaggerUi))

app.use(express.json())

app.use('/', router)

module.exports = app
