/* Question React View Component - question-view.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var QuestionView = require('./components/question');
//var Question = require('../models/question');

module.exports = React.createClass({
  displayName: 'QuestionContainer',
  
  // method to add a new empty question
  onClick: function() {
    alert('new question');
    //var question = new Question();
  },
  
  render: function() {
    
    return (
      <fieldset>
        <legend>Questions will display here</legend>
        <QuestionView survey={this.props.survey} />
        <button type='button' onClick={this.onClick}>
          Add New Question
        </button>
      </fieldset>
    );
  }
});