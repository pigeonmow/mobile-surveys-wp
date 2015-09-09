/**
 * Router - router.js
 * @module
 * @author Matthew Moss
 */
'use strict';
var app = require('ampersand-app');
var Router = require('ampersand-router');
var React = require('react');
var MainView = require('./main-view');
var HomePage = require('./views/home');
var CreateSurvey = require('./views/create-survey');
var Preview = require('./views/preview');
var MessagePage = require('./views/404');
/**
 * Uses ampersand-router node module to
 * deal with urls on the clientside.
 * Define routes & route handlers by extending Router. Key-value pairs: key
 * is the route value is the handler
 */
module.exports = Router.extend({
/**
 * passing a view to the router to be rendered inside the main-view.js
 * Also here making sure the homepage doesn't have the NAV
 * menu - helpful if going to build in a login later - don't want access to
 * NAV for non registered users.
 */
  renderView: function(view, opts) {
/**
 *     Specify default arg for opts - nothing passed in - use a layout
 *         if it is a layout then stick view passed in inside main-view div
 *     container
 *           redefine view
 */
    if (typeof (opts) === 'undefined') {
      opts = {layout: true};
    }

    if (opts.layout) {

      view = (
        <MainView>
          {view}
        </MainView>
      );
    }
/**
 * render only called once - everything else (except home) is a
 *   child component of main view
 */
    React.render(view, document.body); 
  },
/**
 * create the routes
 * create the handlers
 */
  routes: {
    '': 'home',
    'create': 'create',
    'preview': 'preview',
    '*fourOfour': 'fourOfour'
  },

  preview: function() {
    this.renderView(<Preview user={app.user} />);
  },

  home: function() {
    this.renderView(<HomePage />, {layout: false});
  },

  create: function() {
    this.renderView(<CreateSurvey user={app.user} />);
  },

  fourOfour: function() {
    this.renderView(<MessagePage title='404 Not Found' body='Nothing to see here, sorry.' />);
    }
});
