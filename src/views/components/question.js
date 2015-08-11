/* Question React Component - question.js
 * 07/08/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var AnswerChoice = require('./answer-choice');
// View component for an individual question in final survey - reusable for
// survey preview withing building app and publishing a survey
// acess to:
// this.props.user, this.props.user.survey,
// this.props.user.survey.get(Q#).<all props of Q#>
module.exports = React.createClass({
  displayName: 'Question',
  
  render: function() {
    //console.log(this.props.user.survey.get(1));
    return (
      <div>
        <h3>Question {this.props.user.survey.get(1).questionNumber}</h3>
        <p>{this.props.user.survey.get(1).query}</p>
        <p>{this.props.user.survey.get(1).info}</p>
        <p><AnswerChoice choices={this.props.user.survey.get(1).choices} /></p>
      </div>
    );
  }
});
