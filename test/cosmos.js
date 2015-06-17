
/**
 * Test dependencies.
 */

var cosmos = require('..');
var assert = require('assert');

describe("api", function() {

	it('should implement datastore', function() {
		var app = cosmos('test');
		assert(app.set);
		assert(app.get);
		assert(app.del);
	});

});


describe("json", function() {

	it('should read json', function() {
		var app = cosmos('test');
		assert.equal(app.get('title'), 'hello world');
	});

});

describe('template', function() {

	it('should read html template and interpolate with data', function() {
		var app = cosmos('test');
		assert.equal(app.el.outerHTML, '<button>hello world</button>');
	});

});
