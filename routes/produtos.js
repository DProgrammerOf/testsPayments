var express = require('express');
var axios = require('axios');
const { route } = require('.');
var router = express.Router();
var produtosJson = require('../modules/utils-test/produtos-json').produtosJson;
var pagseguro = require('../modules/pagseguro');

/* GET produtos. */
router.get('/', function(req, res, next) {
  
  pagseguro.hashToken("123ABC");
  pagseguro.checkout("ABCDEF");

  res.render('produtos', 
    { title: 'Produtos RenanLV', produtos: produtosJson }
  );

});

router.get('/session', function(req, res, next) {

    axios.post('https://ws.sandbox.pagseguro.uol.com.br/v2/sessions', {
      email: 'renan_vollenghaupt@hotmail.com',
      token: 'BE20D5AFAA6D4CFF9EC73AB916CAA152'
    })
    .then(function (response) {
      console.log('then: ', response.data);
    })
    .catch(function (error) {
      console.log('error', error.data);
    });

    res.status(200).send("Produtos");
});

module.exports = router;
