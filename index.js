
/**
 * Module dependencies.
 */

var read = require('fs').readFileSync;
var join = require('path').join;


/**
 * [exports description]
 * 
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */

module.exports = function(name) {

	var that = {};

	var path = process.cwd();

	that.html = read(join(path, name + '.html'));

	that.json = JSON.parse(read(join(path, name + '.json')));

	return that;
};

