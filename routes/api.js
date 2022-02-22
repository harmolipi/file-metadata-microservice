const express = require('express');
const router = express.Router();

const api_controller = require('../controllers/apiController');

router.post('/fileanalyze', api_controller.fileAnalyze);

module.exports = router;
