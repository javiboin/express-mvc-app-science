const express = require('express');
const router = express.Router();
const heroeController = require('../controllers/heroeController')

router.get('/', heroeController.index);

module.exports = router;
