/* Main View Component - main-view.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
// Main View - src/main-view.js
// Serves as a container for all views/pages to render into
// exceprt for the homepage - accessible publicly (assuming login)
// A react component that can wrap/contain other things
var React = require('react');
// meshing ampersand & react together - react needs to know when model or
// collection have changed - doesn't necessarily need to know what has changed
// just that it has - use a mixin
//var ampersandMixin = require('ampersand-react-mixin');
// anything thats wrapped inside MainView tag - want it to insert
// page inside the div in this main-view container - so use children props
// - this.props is anything passed in <ReactComponent /> eg <Page name="a" />
// will get this.props.name defined as "a" inside the 'Page' component
// children is a special case - referencing anything in {}
var LinkHelper = require('./helpers/link-helper');

module.exports = React.createClass({
  // part of react - can specify mixins - when component mounts in DOM
  // runs a function to check for are any of my properties models or collections
  // if so registers handler so that on change update is forced
 // mixins: [ampersandMixin],
  displayName: 'MainView',

  render() {

    return (
      <LinkHelper>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li><a href='/'>Home</a></li>
            <li><a href='create'>Create Survey</a></li>
            <li><a href='preview'>Preview Survey</a></li>
            <li className='pull-right'><a href='/'>Logout</a></li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </LinkHelper>
    );
  }
});
