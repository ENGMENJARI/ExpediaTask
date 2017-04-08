
var express = require('express');
var app = express();

//require middleware 
require('./config/middleware.js')(app, express);

var request = require('request');
//=============================================================================
/*									routes							 	 	 */
//=============================================================================
app.get('/api/Expedia' , function(req,res) {
	request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function(error, response, body) {

		var data = JSON.parse(body);

		res.json(data.offers.Hotel);
	});
})


//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests
var port=process.env.PORT || 8080
app.listen(port, function () {
	console.log('listen on port...'+ port);
})

module.exports = app;