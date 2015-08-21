/* Home View Component - home.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var LinkHelper = require('../helpers/link-helper');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'HomePage',
  
  onNewSurveyClick: function(event) {
    var check = confirm('Are you sure you wish to delete the contents of local storage and start over?');
    if (check === true) {
      localStorage.clear();  
      location.assign('/create');
    }
  },
  
  // render method
  render: function() {
    return (
      // className is a React specific thingy
      // but that's because that's the actual name on the element in the DOM
      // another is 'for' which becomes 'htmlFor'
      <LinkHelper className='container'>
        <header>
          <h1>Mobile Surveys</h1>
        </header>
        <div className='grid-flex-cell'>
           <img src='http://lorempixel.com/output/technics-q-c-480-480-4.jpg' className='avatar avatar-large avatar-rounded' />
          <p>Welcome, here you can create Surveys!</p>
          <a className='link' onClick={this.onNewSurveyClick}>
            Create New Survey
          </a><br />
      
          <a href='/create' className='link'>
            Continue Editing Saved Survey
          </a>
        </div>
      </LinkHelper>
    );
  }
});
