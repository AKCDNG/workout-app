const Workout = require('../models/workoutModel')

// get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// get a single workout

// create new workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body

  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout

// update a workout

module.exports = {
  createWorkout,
  getWorkouts
}