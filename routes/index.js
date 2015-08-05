var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweets, showForm: true, name: name } );
});

router.get('/users/:name/tweets/:ind', function(req, res) {
	//var name = req.params.name;
	var ind = req.params.ind;
	var tweets = tweetBank.find( {ind: ind} );
	res.render( 'index', { title: 'Twitter.js - Post Id '+ind, tweets: tweets } );
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = router;