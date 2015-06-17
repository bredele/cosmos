var express = require('express');
var cosmos = require('..');
var app = express();

var t0 = new Date();
var test = cosmos('test');
console.log(new Date() - t0);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	var t0 = new Date();
	var str = test.el.outerHTML;
	console.log(new Date() - t0);
  res.send(str);
});

app.listen(8080);

var i = 0;
setInterval(function() {
  test.set('title', i++);
}, 1000);