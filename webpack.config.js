/**
 * Webpack Configuration - webpack.config.js
 * @author Matthew Moss
 */
'use strict';
// Webpack Configuration Settings - webpack.config.js
var getConfig = require('hjs-webpack');

module.exports = getConfig({
  // Entry point to application
  in: 'src/app.js',
  // Directory for public files
  out: 'public',
  // NODE_ENV variable used to specify development or production mode
  isDev: process.env.NODE_ENV !== 'production',
  // Configure local hostname to run app on other local devices - ipad etc
  // hostname: 'TheArchitect-V3.local'
  // CORS stuff
  headers: {'Access-Control-Allow-Origin': '*'},
  // create 200.html file for surge clientside routing
  html: function(context) {
    return {
      'index.html': context.defaultTemplate(),
      '200.html': context.defaultTemplate()
    }
  }
});
