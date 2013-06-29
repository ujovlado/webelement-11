/**
 * Status codes handling
 *
 * http://casperjs.org/faq.html#faq-httpstatuses
 */
var casper = require('casper').create();

casper.on('http.status.404', function () {
	this.echo('404 Not found');
});

casper.start('http://localhost/casperjs/nothing', function () {
	this.echo('test');
});

casper.run(function () {
	this.echo('done').exit();
});
