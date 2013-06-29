/**
 * Test 1. - exists
 *
 * http://casperjs.org/testing.html
 * http://casperjs.org/api.html#tester.assertExists
 */
var casper = require('casper').create();

casper.test.comment('1. test');

casper.start('http://localhost/casperjs/', function () {
	this.test.assertExists('div.login-form', 'Login form exists');
});

casper.run(function () {
	this.test.renderResults(true);
});