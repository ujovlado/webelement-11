/**
 * Custom events
 *
 * http://casperjs.org/events-filters.html
 */
var casper = require("casper").create();

var time = new Date().getTime() / 1000;

casper.on("webelement.presentation", function (status) {
	this.echo("WebElement presentation " + status);
});

casper.start("http://localhost/casperjs", function () {
	var presentationStatus;
	if (time < 1346950800)
		presentationStatus = 'didn\'t start';
	else if (time >= 1346950800 && time <= 1346954400)
		presentationStatus = 'is running';
	else
		presentationStatus = 'finished';

	this.emit("webelement.presentation", presentationStatus);
});

casper.run();