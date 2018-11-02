var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('weather.html', { root: 'public' });
});


router.get('/image', function(req, res, next) {

    var url = "https://pixabay.com/10570580-b2febe00f39a25b7ea8bde2e4/"
    console.log("query ", req.query); 
    url += req.query['q'];
    request(url).pipe(res);

})

module.exports = router;
