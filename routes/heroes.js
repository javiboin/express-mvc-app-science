const express = require('express');
const router = express.Router();
const heroeController = require('../controllers/heroeController')

router.get('/', heroeController.index);
router.get('/detalle/id/:id', heroeController.showDetail);
router.get('/bio/id/:id/:ok?', heroeController.showBio);

module.exports = router;
