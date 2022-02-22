const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const api_controller = require('../controllers/apiController');

router.post(
  '/fileanalyse',
  upload.single('upfile'),
  api_controller.fileAnalyse
);

module.exports = router;
