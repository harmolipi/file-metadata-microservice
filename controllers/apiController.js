const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

exports.fileAnalyze = (req, res) => {
  return res.json({ fileanalyze: 'Not implemented yet' });
};
