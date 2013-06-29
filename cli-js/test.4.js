/**
 * Test 1. - status code
 * Test 2. - exists
 * Test 3. - resource exists
 * Test 4. - eval
 * Test 5. - eval equals
 * + verbose mode
 *
 * http://casperjs.org/testing.html
 * http://casperjs.org/api.html#tester.assertExists
 * http://casperjs.org/api.html#tester.assertResourceExists
 * http://casperjs.org/api.html#tester.assertEval
 * http://casperjs.org/api.html#tester.assertEvalEquals
 */
var casper = require('casper').create({
	verbose:true,
	logLevel:"debug"
});

casper.start('http://localhost/casperjs/', function () {

	this.test.assertHttpStatus(200, 'Status OK');

	this.test.assertExists('div.login-form', 'Login form exists');

	this.test.assertResourceExists(function (resource) {
		return resource.url.match('iframe.html');
	}, 'Iframe loaded');

	this.test.assertEval(function () {
		return typeof(myNumber) != 'undefined';
	}, 'Variable defined');

	this.test.assertEvalEquals(function () {
		return parseInt(myNumber.id);
	}, 42, 'Number is 42');

	this.fill('form', { user:'username', pass:'password' }, true);
});

casper.then(function () {
	this.test.assertExists('#message-logged', 'Logged in');
});

casper.run(function () {
	this.test.renderResults(true);
});
