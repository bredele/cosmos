
/**
 * Module dependencies.
 */

var express = require('express');


//app

var app = module.exports = express();


// middleware

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/build'));
app.use(express.errorHandler());


//config

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


//mount

app.get('*', function(req, res){
  res.render('index.html');
});