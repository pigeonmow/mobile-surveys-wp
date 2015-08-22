/* Home View Component - home.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var LinkHelper = require('../helpers/link-helper');
var url = require('../img/question42_copy.svg');

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
/*      <div>Icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>*/
      // className is a React specific thingy
      // but that's because that's the actual name on the element in the DOM
      // another is 'for' which becomes 'htmlFor'
      <LinkHelper className='container'>
        <header>
          <h1>Mobile Surveys</h1>
        </header>
        <div className='grid-flex-cell'>
           <img src={url} className='avatar avatar-large avatar-rounded' />
          <h3>Welcome, here you can build questionnaires!</h3>
            <p>This construction tool can be used to create a questionnaire survey for publication and completion on mobile devices&#8212;particularly tablets. To get started please use the links below.</p>
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
