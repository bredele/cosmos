
/**
 * Module dependencies.
 */

var read = require('fs').readFile;
var join = require('path').join;


/**
 * [exports description]
 * 
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */

module.exports = function(name) {

	var that = {};


	template(name)
};

function template(name) {
	read(join(__dirname, name + '.html'), function (err, data) {
	  if (err) throw err;
	  console.log(data.toString());
	});
}