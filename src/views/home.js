/**
 * Home View Component - home.js
 * @module
 * @author Matthew Moss
 */
'use strict';
var React = require('react');
var LinkHelper = require('../helpers/link-helper');
var url = require('../img/clipboard105_dark-blue.svg');

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
      <LinkHelper className='container'>
        <header>
          <h1>Mobile Surveys</h1>
        </header>
        <div className='grid-flex-cell'>
           <img src={url} className='avatar avatar-large avatar-rounded' />
          <h3>Welcome, here you can build questionnaires!</h3>
      <p>This was my <em>MSc Computing Science 2015</em> dissertation project. The
      application is functional, but only partially complete&#8212;perhaps I'll
      return to it one day...</p>
            <p>This construction tool can be used to create a simple multiple 
      choice questionnaire
              survey ready for publication and completion on mobile
              devices, particularly tablets. To get started please use the
              links below.</p>
          <a className='link' onClick={this.onNewSurveyClick}>
            Create New Survey
          </a><br />
          <a href='/create' className='link'>
            Continue Editing Saved Survey
          </a>
        </div>
        <footer>
<div>Icons made by <a href="http://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>
        </footer>
      </LinkHelper>
    );
  }
});
