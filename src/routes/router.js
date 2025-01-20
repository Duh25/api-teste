const express = require('express')

const routersUtils = require('../routes/utilsRoutes')
const storeRoutes = require('./storeRoutes.js')
const orderRoutes = require('../routes/orderRoutes')
const userRoutes = require('../routes/userRoutes')
const reportsRoutes = require('../routes/reportsRoute')

const router = express.Router()

router.use('/', routersUtils)
router.use('/store', storeRoutes)
router.use('/order', orderRoutes)
router.use('/user', userRoutes)
router.use('/reports', reportsRoutes)

module.exports = router