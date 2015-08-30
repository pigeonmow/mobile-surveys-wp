/* Webpack Configuration - webpack.config.js
 * 01/07/2015
 * Author: Matthew Moss
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
  headers: {'Access-Control-Allow-Origin': '*'}
});
