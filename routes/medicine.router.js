const express = require('express');
const router = express.Router();

const medicineController = require('../controller/medicine.controller');

router.get('/', medicineController.getAll);
router.get('/:id', medicineController.getById);
router.post("/", medicineController.create);
router.put('/:id', medicineController.update);
router.delete('/:id', medicineController.delete);

module.exports = router;