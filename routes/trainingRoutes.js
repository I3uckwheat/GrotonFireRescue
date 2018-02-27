const express = require('express');
const router = express.Router();

const trainingController = require('../controllers/trainingController.js');

router.get('/', trainingController.trainingSchedule);

router.get('/edit', trainingController.editTrainingSchedule);
router.post('/edit', trainingController.updateTrainingSchedule);

module.exports = router;