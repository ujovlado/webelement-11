/**
 * Command line example
 *
 * http://casperjs.org/cli.html
 * http://casperjs.org/api.html#utils
 */
var casper = require("casper").create();
var dump = require("utils").dump;

casper.echo("passed args");
dump(casper.cli.args);

casper.echo("passed options");
dump(casper.cli.options);

if (casper.cli.has(0)) {
	casper.echo(casper.cli.get(0));
}

if (casper.cli.has("test")) {
	casper.echo(casper.cli.get("test"));
}

casper.exit();