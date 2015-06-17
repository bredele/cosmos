
/**
 * Module dependencies.
 */

var read = require('fs').readFileSync;
var join = require('path').join;
var brick = require('brickjs');
// @note brick should include roof
var rood = require('roof');


/**
 * Micro service factory.
 *
 * Example:
 *
 *   var service = cosmos('widget');
 * 
 * @param {String} name
 */

module.exports = function(name) {

	var path = process.cwd();

	var html = read(join(path, name + '.html')).toString();

	var json = JSON.parse(read(join(path, name + '.json')).toString());

	var that = brick(html, json.data);

	return that.render();
};

