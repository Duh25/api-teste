const express = require('express')
const routersUtils = require('../routes/utilsRoutes')

const router = express.Router()

router.use('/', routersUtils)

module.exports = router