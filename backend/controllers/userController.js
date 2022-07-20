const user = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
  res.json({message: 'login user'})
}

// sign up user
const signUpUser = async (req, res) => {
  res.json({message: 'signup user'})
}

module.exports = {loginUser, signUpUser}