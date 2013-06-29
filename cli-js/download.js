/**
 * Download a file
 *
 * http://casperjs.org/api.html#casper.download
 */
var casper = require("casper").create();

casper.start("http://localhost/casperjs/", function () {
	this.download("apple-touch-icon-144x144.png", "../tmp/webelement-logo.png");
});

casper.run();