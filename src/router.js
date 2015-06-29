// Application Router - router.js
// Uses ampersand-router module
//dealing with urls on the clientside: create code that handles & renders
//page from the 200.html catchall file
//import ampersand-app - a singleton pattern for the global app
var app = require('ampersand-app');
var Router = require('ampersand-router');
var React = require('react');

var MainView = require('./main-view');
var HomePage = require('./views/home');
var CreatePage = require('./views/create');
var SurveyPage = require('./views/survey');


//define routes & route handlers by extending Router: key-value pairs: key
//is the route (url (nb. blank is same as /)) value is the handler
module.exports = Router.extend({
    // passing a view to the router to be rendered inside the main-view.js
  // as a child?? Also here making sure the homepage doesn't have the NAV
  // menu - helpful if going to build in a login later - don't want access to
  // NAV for non registered people
  renderView: function (view, opts) {
    // specify default arg for opts - nothing passed in - use a layout
    if (typeof(opts)==='undefined') {
      opts = {layout: true}
    }
    // !!!!!!!!!!!!!!!!!!! need to figure this bit out !!!!!!!!!!
    // rename layout???
    if (opts.layout) {
      // redefine view
      view = (
        <MainView>
          {view}
        </MainView>
      )
    }
    
    React.render(view, document.body);
      
  },
    
  
//create the routes
  routes: {
    '': 'home',
    'create': 'create',
    'survey': 'survey'
  },

//create the handlers
  home: function () {
    // layout false on this one removes the NAV using an object rather than
    // just false to improve human readability
    this.renderView(<HomePage />, {layout: false});
  },
  
  survey: function () {
    this.renderView(<SurveyPage />);
  },
  
  create: function () {
    //console.log('on survey page')
    this.renderView(<CreatePage />);
  }
});