
/**
 * Dependencies
 */

var request = require('superagent');


/**
 * Expose 'Mod'
 */

module.exports.request = function(repo, name) {
	//NOTE:we could set branch with @
	var url = '/' + repo + '/' + name + '/archive/master.zip';
	request.get('https://github.com' + url, function(res){
		console.log(res);
	});
};