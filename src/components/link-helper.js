var React = require('react');
// library to handle links as described below - it takes an event object
// and figures out if it was a local click - dealing with internal navigation
// browsers normally - if you click link it will refresh page & do a GET - 
// unless told not to - which is what we do here - bubbles up through app
var localLinks = require('local-links');
var app = require('ampersand-app');
// this essentially creates a <div> - see use in main-view.js

module.exports = React.createClass({
  displayName: 'linkHelper',
    // event we get here not native DOM event - synthetic - since React is 
  // handling the DOM - nice - React handles browser compatibility - much
  // like 'jQuery on'
  onClick: function (event) {
    // we want to keep normal link functionality, and use event to tell if click
    // is internal or external (to app) navigation click
    // pass the event & if its a link click returns null or pathname
    var pathname = localLinks.getLocalPathname(event)
    
    if (pathname) {
      event.preventDefault()
      // example code for if we want to use
      // as event bus to pass data: don't over use though
      // - hard to keep track of:
      // app.trigger('local', {some: 'data'}); // see also app.js
      
      // tell app to navigate internally - could do this:
      app.router.history.navigate(pathname)
      // but what's app??? - do this instead:
      
    }
  },
                                   
  render () {
    return (
      // '...this.props' allows properties to be passed through, className etc
      // (poss this is ES6??)
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
  
});