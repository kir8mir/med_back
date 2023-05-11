const express = require('express');
const router = express.Router();

const actionController = require('../controller/action.controller');

router.get('/', actionController.getAll);
router.get('/:id', actionController.getById);
router.post("/", actionController.create);
router.delete('/:id', actionController.delete);

module.exports = router;