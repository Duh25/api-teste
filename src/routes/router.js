const express = require('express')
const routersUtils = require('../routes/utilsRoutes')
const storeRoutes = require('./storeRoutes.js')
const router = express.Router()

router.use('/', routersUtils)
router.use('/store', storeRoutes)

module.exports = router