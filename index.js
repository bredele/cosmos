
/**
 * Module dependencies.
 */

var read = require('fs').readFileSync;
var join = require('path').join;
var brick = require('brickjs');
// @note brick should include roof
var rood = require('roof');
var debug = require('debug');

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

	var log = debug(name);

	/**
	 * Cosmos app path.
	 * @type {String}
	 */
	
	var path = process.cwd();


	/**
	 * A cosmos app is a brick.
	 * 
	 * @see  http://github.com/bredele/brickjs
	 */
	
	var that = brick();


	/**
	 * Reload cosmos app.
	 *
	 * Load template and interpolate
	 * it with data.
	 * 
	 * @return {this}
	 * @api public
	 */
	
	that.reload = function() {
		that.off();
		html();
		json();
		that.render();
		return that;
	};


	/**
	 * Read HTML template
	 * and set cosmos template.
	 *
	 * @note should clean html 
	 * as option (htmlclean).
	 * 
	 * @api private
	 */
	
	function html() {
		var str = read(join(path, name + '.html'), 'utf8');
		that.from(str.replace(/(\r\n|\n|\r)/gm,""));
		log('set ' + name + ' template');
	}


	/**
	 * Read cosmos configuration
	 * and data.
	 * 
	 * @api private
	 */
	
	function json() {
		var obj = JSON.parse(read(join(path, name + '.json'), 'utf8'));
		that.reset(obj.data);
		log('set ' + name + ' data');
	}

	return that;
};

