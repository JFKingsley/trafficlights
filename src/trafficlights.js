var path = require('path');

module.exports = {

 registerRoutes: function(server, routes, options) {
          var controllerPath = path.dirname(require.main.filename)+"/controllers";
          if(options !== undefined && options.controllerPath !== undefined) {
               controllerPath = path.dirname(require.main.filename)+options.controllerPath;
          }

          if(!Array.isArray(routes)) {
               throw new Error('TrafficLights encountered an invalid routes array.');
          }
          
          var lookup = {};
          var i;
          for (i = 0; i < routes.length; i += 1) {
              lookup[routes[i].path] = routes[i];
          }

          for (i = 0; i < routes.length; i += 1) {
               server[routes[i].type](routes[i].path, function (req, res) {
                if(options !== undefined && options.debug) {
                     console.log(req.connection.remoteAddress + ' just %s requested %s', req.method, req.originalUrl);
                }
                if (lookup[req.route.path] !== undefined) {
                    require(controllerPath + '/' + lookup[req.route.path].controller).render(req, res);
                } else {
                    res.send(404, JSON.stringify({'status' : 'error', 'error' : 'file_not_found'}));
                }
            });
          }
     }
};