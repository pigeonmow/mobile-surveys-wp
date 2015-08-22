/* Question Container React Component - question-container.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');

var Query = require('./components/query');
var Info = require('./components/info');
var MultiChoice = require('./components/multi-choice');
//var ampersandMixin = require('ampersand-react-mixin');
// this file needs refactoring into seperate components with individual concerns
module.exports = React.createClass({
  displayName: 'QuestionContainer',
 // mixins: [ampersandMixin],
  getInitialState: function() {
    
    var lastQuestion = this.props.user.survey.length;
    var choices;
    // check if any question models already exist
    if (typeof this.props.user.survey.get(lastQuestion) != 'undefined') {
      // if they do set the last one's choices to choices var
      choices = this.props.user.survey.get(lastQuestion).choices;
      //alert('already exists!');
    } else {
      // if not create a new question model & set its choices to choices var
      this.props.user.survey.add({ });
      var lastQuestion = app.user.survey.length;
      choices = app.user.survey.get(lastQuestion).choices;
      //alert('added one for ya!');
    }
    
    return {
      choices: choices
    }
  },

  // Save & New buttons


  onNewQuestionClick: function(event) {
    //alert('Newing!');
    // need validation of current Q data
    // add a new empty question model to the collection
    this.props.survey.add({});
    // make the new question the current state
    var lastQuestion = this.props.survey.length;
    var newChoices = this.props.survey.get(lastQuestion).choices;
    // just need to sort this - choices is now in child - multi-choice
    this.replaceState({choices: newChoices});
    console.log(this.state.choices);
    this.props.user.editQuery = true;
    this.props.user.editInfo = true;
    this.props.user.editChoices = true;
  },
  
  render: function() {
    var lastQuestion = this.props.survey.length;
    // question number for display
    var currentQuestion = this.props.survey.get(lastQuestion).questionNumber;

  
    return (
      <div className='grid-flex-cell'>
        <h3>Add Questions Here</h3>
        <span>Question {currentQuestion}</span>
        <Query user={this.props.user} />
        <Info user={this.props.user} />
        <MultiChoice user={this.props.user} choices={this.state.choices} />
 
        <button type='button' onClick={this.onNewQuestionClick} className='button'>
          New Question
        </button>
      </div>
    );
  }
});