var express = require( 'express' );
var app = express(); // creates an instance of an express application
var swig = require('swig');
var tweetBank = require('./tweetBank');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var routes = require('./routes/');
var socketio = require('socket.io');

swig.setDefaults({ cache: false });

var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser);

var server = app.listen(port, function (){
	console.log('Awaiting order on port', port);
});
var io = socketio.listen(server);

app.use('/', routes(io));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(function (req, res, next) {
	console.log('Response status code ' + res.statusCode);
	console.log("Route: " + req.path + "\n" + "Method: "+ req.method);
    next();
});

app.use(express.static(__dirname + '/public'));



// app.get('/', function (req, res, next){
// 	//res.send("Welcome\n");
// 	var people = [{name: 'Full', lastname: "Name"}, {name: 'Stacker', lastname: 'Queuer'}, {name: 'Son', lastname: 'Daughter'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );


// });

// app.get('/news', function (req, res, next){
// 	res.send("Welcome to news\n");

// });




