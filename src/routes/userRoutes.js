const express = require('express')

const {createUser, find} = require('../controllers/userController')


const router = express.Router()

router.post('/create', createUser)
router.get('/find', find)


module.exports = router