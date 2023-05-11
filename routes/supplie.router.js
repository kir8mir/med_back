const express = require('express');
const router = express.Router();

const supplieController = require('../controller/supplie.controller');

router.get('/', supplieController.getAll);
router.get('/:id', supplieController.getById);
router.post("/", supplieController.create);
router.put('/:id', supplieController.update);
router.delete('/:id', supplieController.delete);

module.exports = router;