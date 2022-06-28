const express = require('express')

const router = express.Router()


//GET all workouts
router.get('/', (req, res) => {
  res.json({message: 'GET all workouts'})
})

//GET single workout
router.get('/:id', (req, res) => {
  res.json({message: 'GET a single workout'})
})




module.exports = router;