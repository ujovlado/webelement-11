/**
 * Capture screen
 *
 * http://casperjs.org/api.html#casper.viewport
 * http://casperjs.org/api.html#casper.capture
 */
var casper = require("casper").create({
	viewportSize:{
		width:800,
		height:600
	}
});

casper.start("http://localhost/casperjs/", function () {
	this.capture("../tmp/screenshot.png");
});

casper.run();