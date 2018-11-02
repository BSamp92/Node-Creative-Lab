var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('weather.html', { root: 'public' });
});


router.get('/image', function(req, res, next) {

    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyC3XEHstGPBvc_retznQ2eFfyrI0rT9x1Q&cx=011610929792324095125:oloxamxnes8&q="
    console.log("query ", req.query)
    url += req.query['q'];
    url += req.query['q'];
    url += "?format=json";
    request(url).pipe(res);

})

module.exports = router;
