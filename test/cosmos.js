
/**
 * Test dependencies.
 */

var cosmos = require('..');
var assert = require('assert');


describe("json", function() {

	it('should implement datastore', function() {
		var app = cosmos('test');
		assert(app.set);
		assert(app.get);
		assert(app.del);
	});

	it('should read html template', function() {
		var app = cosmos('test');
		assert.equal(app.html, '<button>${label}</button>');
	});

	it('should read json', function() {
		var app = cosmos('test');
		assert.deepEqual(app.json, {
			data: {
				title: 'hello world'
			}
		});
	});

});
