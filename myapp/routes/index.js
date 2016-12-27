var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {console.log(__dirname);
  fs.readFile('config.json', function(err, data) {
    console.log(data);
    res.render('index', { title: 'Prevero IDS Setup', data: data});
  });
});

router.get('/configureids', function(req, res, next) {
  res.render('configureids', {title: 'Configure IDS'});
});

router.post('/configureids', function(req, res, next) {
  console.log(req.body);
  fs.writeFile('config.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });
  res.redirect('/');
});

module.exports = router;
