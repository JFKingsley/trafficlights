Routes
=====

![Routes NPM](https://nodei.co/npm/trafficlights.png)

> TrafficLights is an awesome routing system for ExpressJS. It is still a work in progress, but at the moment it allows for basic routing.

### Install
```bash
$ npm install trafficlights
```

### Usage
```javascript
var trafficLights = require('trafficlights');
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

trafficlights.registerRoutes(server, routes, options);

server.listen(process.argv.splice(2)[0] || 1337);

```

And done! It's that simple.

### Config

The configurable options are currently limited to "debug", which logs each request, and "controllerPath", which allows you to specify the controller path relative to the app root. 

All controller files are required then the function "render" is called on them with parameters of res and req respectively.