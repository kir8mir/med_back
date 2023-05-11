const express = require('express');
const router = express.Router();

const doctorController = require('../controller/doctor.controller');

router.get('/', doctorController.getAll);
router.get('/:id', doctorController.getById);
router.post("/", doctorController.create);

router.put('/:id', doctorController.update);
router.delete('/:id', doctorController.delete);

module.exports = router;


