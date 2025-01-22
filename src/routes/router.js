const express = require('express')

const routersUtils = require('../routes/utilsRoutes')
const storeRoutes = require('./storeRoutes.js')
const orderRoutes = require('../routes/orderRoutes')
const userRoutes = require('../routes/userRoutes')
const reportsRoutes = require('../routes/reportsRoute')
const authRoutes = require('../routes/authRoutes.js')

const {verifyJwt} = require('../middlewares/authenticate')

const router = express.Router()



router.use('/', authRoutes)
router.use('/store',verifyJwt, storeRoutes)
router.use('/order', verifyJwt, orderRoutes)
router.use('/user', verifyJwt,userRoutes)
router.use('/reports', verifyJwt , reportsRoutes)

module.exports = router