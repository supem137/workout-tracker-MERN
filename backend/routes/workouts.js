const express = require('express');
const {
  createWorkout,
  workouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', workouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

module.exports = router;
