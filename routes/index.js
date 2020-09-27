var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'Express', descricao: 'Ola tudo bem?2' }
  );
});

module.exports = router;
