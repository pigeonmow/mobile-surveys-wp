/* Question React Component - question.js
 * 07/08/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var AnswerChoice = require('./answer-choice');
// View component for an individual question in final survey - reusable for
// survey preview withing building app and publishing a survey
//
// acess to:
// this.props.user, this.props.user.survey,
// this.props.user.survey.get(qNum).<all props of Q#>
module.exports = React.createClass({
  displayName: 'Question',
  


  
  render: function() {
    console.log(this.props.user.survey.length);

    return (
      <div>

        <p>{this.props.user.survey.get(1).query}</p>

      </div>
    );
  }
});

/*        <h3>Question {this.props.user.survey.get(1).questionNumber}</h3>
        <p>{this.props.user.survey.get(1).query}</p>
        <p>{this.props.user.survey.get(1).info}</p>
        <p><AnswerChoice choices={this.props.user.survey.get(1).choices} /></p>*/
   // this could be another closure - like the mainIndex counter...
    // could/should I use Object.keys() here??
    // for loop -- once set up - check against Crockfords book
    // for loop runs through immediately so - needs a counter which increments 
    // with each click - a loop doesn't respond to user interaction!!
    
/*    for (var qNum=1; qNum < length; qNum++) {
      console.log(this.props.user.survey.get(qNum).query);
    }*/