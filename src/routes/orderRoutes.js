const express = require('express')
const {createOrder, updateOrder} = require('../controllers/orderController')

const router = express.Router()

router.post('/create', createOrder)
router.put('/update', updateOrder)


module.exports = router