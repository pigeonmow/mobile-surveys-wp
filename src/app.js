/**
 * App - app.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
// Application Entry Point - src/app.js
var styles = require('./styles/main.styl');
//import ampersand-app - a singleton pattern for the global app - always returns
//same instance of 'app' object
var app = require('ampersand-app');
var Router = require('./router');
var User = require('./models/user');
// should copy favicon to root directory on build
var favicon = require('file?name=favicon.ico!./img/favicon.ico');
//expose app to browser console for debugging use
//******************REMOVE IN PRODUCTION CODE**********************
window.app = app;
//*****************************************************************
app.extend({
  init: function() {
    // create new user model & attach to App object
    this.user = new User();
    // start up the router
    this.router = new Router();
    //tell app to start tracking urls since can create multiple routers,
    // 'history' is a singleton that all routers reference, so when start is
    // called browser
    //reads url & calls appropriate handler in router
    this.router.history.start();
  }
});

app.init();
// not using below method - because not great idea to depend on globals existing
// within application. Can run into problems such as - if we just export
// window.app - it doesn't necessarily exist when we require it elsewhere!
// Hence use a SINGLETON
/*window.app = {
  init: function () {
    this.router = new Router ();
    this.router.history.start();
  }
};
window.app.init();*/
