var express = require( 'express' );
var app = express(); // creates an instance of an express application

var port = 3000;

app.get('/', function(request,response){
	response.send("Welcome")

});

app.listen(port, function (){
	console.log('Awaiting order on port', port);
});