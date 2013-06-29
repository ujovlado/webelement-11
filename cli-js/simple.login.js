/**
 * Test of authentication
 *
 * http://casperjs.org/api.html#casper.fill
 * http://casperjs.org/api.html#casper.exists
 */
var casper = require('casper').create();

casper.start('http://localhost/casperjs/', function () {
	this.fill('form', { user:'username', pass:'password' }, true);
});

casper.then(function () {
	if (this.exists("#message-logged"))
		this.echo('Logged in');
});

casper.run(function () {
	this.exit();
});