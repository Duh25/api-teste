const express = require('express')
const routersUtils = require('../routes/utilsRoutes')
const storeRoutes = require('./storeRoutes.js')
const orderRoutes = require('../routes/orderRoutes')
const router = express.Router()

router.use('/', routersUtils)
router.use('/store', storeRoutes)
router.use('/order', orderRoutes)

module.exports = router