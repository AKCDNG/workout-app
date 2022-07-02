const express = require('express')
const {
  createWorkout
} = require('../controllers/workoutController')
const router = express.Router()


//GET all workouts
router.get('/', (req, res) => {
  res.json({message: 'GET all workouts'})
})

//GET single workout
router.get('/:id', (req, res) => {
  res.json({message: 'GET a single workout'})
})

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({message: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({message: 'UPDATE a workout'})
})

module.exports = router;