/**
 * Test 1. - status code
 * Test 2. - exists
 * Test 3. - resource exists
 * Test 4. - eval
 *
 * http://casperjs.org/testing.html
 * http://casperjs.org/api.html#tester.assertExists
 * http://casperjs.org/api.html#tester.assertResourceExists
 * http://casperjs.org/api.html#tester.assertEval
 */
var casper = require('casper').create();

casper.test.comment('3. test');

casper.start('http://localhost/casperjs/', function() {

    this.test.assertHttpStatus(200, 'Status OK');

    this.test.assertExists('div.login-form', 'Login form exists');

    this.test.assertResourceExists(function (resource) {
        return resource.url.match('iframe.html');
    }, 'Iframe loaded');

    this.test.assertEval(function () {
        return typeof(myNumber) != 'undefined';
    }, 'Variable defined');
});

casper.run(function() {
    this.test.renderResults(true);
});