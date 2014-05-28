var trafficlights = require('../main.js');
var express = require('express');
var server = express();

var routes = [
	{
	    "path" : "/",
	    "type" : "get",
	    "controller" : "IndexController"
	},
	{
	    "path" : "/health",
	    "type" : "get",
	    "controller" : "HealthController"
	}
];

var options = {
	controllerPath: "/controllers", // No dot
	debug: true
}

trafficlights.registerRoutes(server, routes, options);

server.listen(process.argv.splice(2)[0] || 1337);

console.log("Test Started");