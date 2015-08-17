var express = require('express');
var router = express.Router();

router.use('/api', require('./api'));

router.get('/**', index);

module.exports = router;

//////////////////////

function index(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
}
