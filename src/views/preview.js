/* Preview Survey React Component - preview.js
 * 28/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');

// maybe use ternary logic for fields not yet populated...?
// condition ? expr1 : expr2 

module.exports = React.createClass({
  displayName: 'PreviewSurvey',
  
  render: function() {
    console.log(this.props.user.survey);
    return (
      <div>
        <h2>Your survey will look like this...</h2>
        <form>
          <h3>{this.props.user.surveyTitle}</h3>
          <fieldset> 
            <legend>Survey Information</legend>
            <div>{this.props.user.instructions}</div>
          </fieldset>
          <fieldset>
            <legend>Your details</legend>
            <input type ='radio'>Your Age</input>
            <input type ='radio'>Your Gender</input>
            <input type ='radio'>Your Income</input>
          </fieldset>
          <fieldset>
            <legend>Questions</legend>
            <div>{this.props.user.survey.models.length}</div>
            <button>Next</button>
          </fieldset>
          <button>Save for later</button>
          <button>Submit Your Answers</button>
        </form>
      </div>
    );
  }
});