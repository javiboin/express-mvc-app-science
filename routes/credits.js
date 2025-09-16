const express = require('express');
const router = express.Router();
const creditsController = require('../controllers/creditsController');

router.get('/', creditsController.index);

module.exports = router;