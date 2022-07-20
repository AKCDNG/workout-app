const express = require('express')

// controller functions

const {signUpUser, loginUser} = require('../controllers/userController')

const router = express.Router()

// Login
router.post('/login', loginUser)

//Sign up
router.post('/signup', signUpUser)

module.exports = router