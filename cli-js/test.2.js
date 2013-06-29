/**
 * Test 1. - exists
 * Test 2. - resource exists
 * + debug message (not shown)
 *
 * http://casperjs.org/testing.html
 * http://casperjs.org/api.html#tester.assertExists
 * http://casperjs.org/api.html#tester.assertResourceExists
 */
var casper = require('casper').create();

casper.test.comment('2. test');

casper.start('http://localhost/casperjs/', function () {
	this.test.assertExists('div.login-form', 'Login form exists');

	this.test.assertResourceExists(function (resource) {
		return resource.url.match('iframe.html');
	}, 'Iframe loaded');
});

casper.log('this is a debug message', 'debug');

casper.run(function () {
	this.test.renderResults(true);
});