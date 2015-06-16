
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


describe('template', function() {

	it('should read html template', function() {
		var app = cosmos('test');
		assert.equal(app.html, '<button>${label}</button>');
	});

});


describe("json", function() {

	var app;

	beforeEach(function() {
		app = cosmos('test');
	});
	

	it('should read json', function() {
		assert.deepEqual(app.json, {
			data: {
				title: 'hello world'
			}
		});
	});

	it('should read data from json', function() {
		assert.equal(app.get('title'), 'hello world');
	});

});
