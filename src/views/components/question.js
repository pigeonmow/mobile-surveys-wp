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
  
    //another closure, I think --- is it module pattern??
  // so far so good - needs something for when it reaches end of questions...
  // also where will this function live - the actual 'NEXT' button is in
  // preview.js - should this be or should the button relocate here to the 
  // question view - what's more logical??
  // plus of course, need to get it so ir renders the questions - not just 
  // console.log! 
  myfunction: (function(event) {
    var qNum = 0;
    console.log(qNum);
    console.log('outer!');

    return function() {
      qNum += 1;
      console.log(qNum);
      console.log('inner!')
      console.log(this.props.user.survey.get(qNum).query);
      var currentQuestion = this.props.user.survey.get(qNum).query;
      return currentQuestion;
    }
      
  }()),

  
  render: function() {
    console.log(this.props.user.survey.length);
    var currentQuestion = currentQuestion;
    return (
      <div>
        {currentQuestion}
        {this.myfunction()}

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