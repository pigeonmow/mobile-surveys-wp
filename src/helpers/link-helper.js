/**
 * Link Helper Component - link-helper.js
 * @module
 * @author Matthew Moss
 */
'use strict';
var React = require('react');
// library to handle links as described below - it takes an event object
// and figures out if it was a local click.
var localLinks = require('local-links');
var app = require('ampersand-app');

module.exports = React.createClass({
  displayName: 'linkHelper',

  onClick: function(event) {
    // we want to keep normal link functionality, and use event to tell if click
    // is internal or external (to app) navigation click
    // pass the event & if its a link click returns null or pathname
    var pathname = localLinks.getLocalPathname(event);

    if (pathname) {
      event.preventDefault();
      // tell app to navigate internally
      app.router.history.navigate(pathname);
    }
  },

  render() {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }
});
