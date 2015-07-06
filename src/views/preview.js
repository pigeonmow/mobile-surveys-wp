// Preview Survey View - src/components/preview.js
var React = require('react');
var UserName = require('../components/user-name');
var SurveyTitle = require('../components/survey-title');
var Instructions = require('../components/instructions');
var QuestionContainer = require('../components/question-container');
var ElementContainer = require('../components/element-container');
var ThankYou = require('../components/thank-you');

// React - nice to have html5 in here to see in context - trade off separation
// of concerns - is it separate?? View - describes DOM interaction & stuff...

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'PreviewPage',
  // set the initially selected option displayed when view rendered  
  getInitialState: function () {
    return {

    };
  },

// methods to deal with changing each form field
//  onUserChange: function(event) {
//    this.setState({
//      user_name: event.target.user_name
//    });
//  },
  
  render: function () {
    return (
      <div className='grid-flex-cell' id='preview-survey'>

        <aside className='preview-template'>
          <form action='' method='' id=''>
      
            <UserName />
            <SurveyTitle />
            <Instructions />
            <QuestionContainer />
            <ElementContainer />
            <ThankYou />
      
            <div className='submit-button'>
              <button type='submit' className='button button-outlined' onClick=''>
                  Save
              </button>
              <button type='submit' className='button button-outlined' onClick=''>
                  Publish
              </button>
            </div>
      
          </form>
        </aside>  
      </div>
    );
  }
});
