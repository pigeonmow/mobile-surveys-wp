// Application Entry Point - src/app.js
var styles = require('./styles/main.styl');
//var React = require('react');


//import ampersand-app - a singleton pattern for the global app - always returns
//same instance of 'app' object
var app = require('ampersand-app');
var Router = require('./router');
var Survey = require('./models/survey');
var Question = require('./models/question');
//expose app to browser console for debugging use
//!!!!!!!!!!!!!!!!!!!!REMOVE IN PRODUCTION CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
window.app = app;

//main entry point for the application & then call it
//extends ampersand-app
app.extend({
  
  init: function () {
    // create a new survey model & attach to app object
    // not entirely sure if I need to do this*******
    this.survey = new Survey();
// temporarily create new question here
    this.question = new Question();
    // start up the router
    this.router = new Router();  
    //tell app to start tracking urls since can create multiple routers, 'history'
    //is a singleton that all routers reference, so when start is called browser
    //reads url & calls appropriate handler in router
    this.router.history.start();
    console.log(this.props);
  }
});

// using app singleton to pass data example - see also link-helper.js
// app.on('local', function () {
//  console.log(arguments)
// })


app.init();


// not using below method - because not great idea to depend on globals existing 
// within application. Can run into problems such as - if we just export
// window.app - it doesn't necessarily exist when we require it elsewhere!
// Heance we use a SINGLETON!!! Easier for others to understand too!
/*window.app = {
  init: function () {
    this.router = new Router ();
    this.router.history.start();
  }
};

window.app.init();*/
