/**
 * Question React Component - question.js
 * @module
 * @ author Matthew Moss
 */
'use strict';
var React = require('react');
var AnswerChoice = require('./answer-choice');
// View component for an individual question in final survey - reusable for
// survey preview withing building app and publishing a survey
module.exports = React.createClass({
  displayName: 'Question',

  getQuestionNumber: (function(event) {
    var qNum = 0;
    return function() {
      qNum += 1;
      var questionNumber = this.props.user.survey.get(qNum).questionNumber;
      return questionNumber;
    };
  }()),

  getQuery: (function(event) {
    var qNum = 0;

    return function() {
      qNum += 1;
      var currentQuery = this.props.user.survey.get(qNum).query;
      var currentInfo = this.props.user.survey.get(qNum).info;
      return currentQuery;
    };
  }()),

  getInfo: (function(event) {
    var qNum = 0;

    return function() {
      qNum += 1;
      var currentInfo = this.props.user.survey.get(qNum).info;
      return currentInfo;
    };
  }()),

  getChoices: (function(event) {
    var qNum = 0;
    return function() {
      qNum += 1;
      var currentChoices = this.props.user.survey.get(qNum).choices;
      return currentChoices;
    };
  }()),

  render: function() {
    var qNum = qNum;

    return (
      <div className='question'>
        <h3>Question {this.getQuestionNumber()}</h3>
        <p>{this.getInfo()}</p>
        {this.getQuery()}
        <AnswerChoice choices={this.getChoices()} />
      </div>
    );
  }
});
