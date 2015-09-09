/**
 * Main View Component - main-view.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
// Serves as a container for all views/pages to render into
// exceprt for the homepage - accessible publicly (assuming login)
// A react component that can wrap/contain other things
var React = require('react');
var LinkHelper = require('./helpers/link-helper');
var url = require('./img/clipboard105_dark-blue.svg');
module.exports = React.createClass({
  displayName: 'MainView',

  onClearStorageClick: function(event) {
    var check = confirm('Are you sure you wish to delete the contents of local storage and start over?');
    if (check === true) {
      localStorage.clear();
      location.assign('/create');
    }
  },

  render() {

    return (
      <LinkHelper>
        <nav className='top-nav top-nav-dark cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li><a href='/'><img src={url}
              className='avatar avatar-medium avatar-rounded' /></a></li>
            <li><a href='create'>Create Survey</a></li>
            <li><a href='preview'>Preview Survey</a></li>
            <li className='pull-right'><a onClick={this.onClearStorageClick}>
              Clear Local Storage</a></li>
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
