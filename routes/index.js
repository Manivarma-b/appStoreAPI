var express = require('express');
var router = express.Router();
var service = require('../services/apps.service')
/* GET home page. */



router.get('/newGames', function(req, res, next) {
  service.newGameService(res)
});

router.get('/topGames', function(req, res, next) {
  service.topGameService(res)
});

router.get('/homeGames', function(req, res, next) {
  service.homeGameService(res)
});



module.exports = router;
