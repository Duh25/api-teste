const express = require('express')
const {createOrder, updateOrder, deleteOrder, find} = require('../controllers/orderController')

const router = express.Router()

router.post('/create', createOrder)
router.put('/update', updateOrder)
router.delete('/delete', deleteOrder)
router.get('/find', find)


module.exports = router