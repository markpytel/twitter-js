var express = require( 'express' );
var app = express(); // creates an instance of an express application

var port = 3000;

app.use(function (req, res, next) {
	console.log('Response status code ' + res.statusCode);
	console.log("Route: " + req.path + "\n" + "Method: "+ req.method);

    next();
});

app.get('/', function(req,res,next){
	res.send("Welcome\n");

});

app.get('/news', function(req,res,next){
	res.send("Welcome to news\n");

});

app.listen(port, function (){
	console.log('Awaiting order on port', port);
});