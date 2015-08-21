/* Question Container React Component - question-container.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var Choice = require('./components/choice');
var Query = require('./components/query');
var Info = require('./components/info');

// this file needs refactoring into seperate components with individual concerns
module.exports = React.createClass({
  displayName: 'QuestionContainer',
  
  getInitialState: function() {
    var lastQuestion = this.props.survey.length;
    var choices;
    // check if any question models already exist
    if (typeof this.props.survey.get(lastQuestion) != 'undefined') {
      // if they do set the last one's choices to choices var
      choices = this.props.survey.get(lastQuestion).choices;
      //alert('already exists!');
    } else {
      // if not create a new question model & set its choices to choices var
      this.props.survey.add({ });
      var lastQuestion = app.user.survey.length;
      choices = app.user.survey.get(lastQuestion).choices;
      //alert('added one for ya!');
    }
    
    return {


      choices: choices,
      text: ''
    }
  },
  // multiple choice question stuff
  // start with empty text string - choices is an array of strings
  onTextChange: function(event) {
    this.setState({text: event.target.value});
  },
  // when button is clicked Array.concat() creates & returns new array with
  // original contents plus what was typed in
  // then state is set to the new array and empty text string
  onAddChoice: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.survey.length;
    var nextChoices = this.state.choices.concat([this.state.text]);
    // assign it to the model
    this.props.survey.get(lastQuestion).choices = nextChoices;
    var nextText = '';
    this.setState({choices: nextChoices, text: nextText});
  },
  // remove a choice - BUT if user does not
  // enter a number it still deletes choice at index zero - needs fixing*******
  // using Array.splice()
  onDeleteChoice: function(index) {
    var lastQuestion = this.props.survey.length;
    var index = prompt('Please enter the answer choice number to delete');
    // if user enters an index delete that one
    if (index != null) {
      // copy array
      var choicesCopy = this.state.choices.slice();
      // remove element at index - in state
      choicesCopy.splice(index, 1);
      // assign it to the model
      this.props.survey.get(lastQuestion).choices = choicesCopy;
      // update the state
      this.setState({choices: choicesCopy});
    }
    // if they click cancel - do nothing
  },


  // Save & New buttons
  onSaveQuestionClick: function() {
   // alert('Saving!');
    this.props.user.editChoices = false;
  },
  
  onEditChoicesClick: function(event) {
    event.preventDefault();
    this.props.user.editChoices = true;
  },
  
  onNewQuestionClick: function() {
    //alert('Newing!');
    // need validation of current Q data
    // add a new empty question model to the collection
    this.props.survey.add({});
    // make the new question the current state
    var lastQuestion = this.props.survey.length;
    var newChoices = this.props.survey.get(lastQuestion).choices;
    this.replaceState({choices: newChoices});
    this.props.user.editQuery = true;
    this.props.user.editInfo = true;
  },
  
  render: function() {
    var lastQuestion = this.props.survey.length;
    // question number for display
    var currentQuestion = this.props.survey.get(lastQuestion).questionNumber;


    // multiple choice question view
    var choicesContent;
    if (this.props.user.editChoices === true) {
      choicesContent = (
                <div>
          <Choice choices={this.state.choices} />
          <label htmlFor='answer-text'>Enter answer choice</label>
          <input type='text' onChange={this.onTextChange} value={this.state.text} id='answer-text' className='form-input'/>
          <div className='button-group'>
          <button type='button' onClick={this.onAddChoice} className='button'>Add Choice</button>
          <button type='button' onClick={this.onDeleteChoice} className='button'>
            Delete Choice
          </button>
          </div>
        </div>
    );
    } else {
      choicesContent = (
      <fieldset>
        <Choice choices={this.state.choices} />
          <button onClick={this.onEditChoicesClick} type='button' className='button pull-right'>Edit</button>
      </fieldset>
    );
    }
  
    return (
      <div className='grid-flex-cell'>
        <legend>Questions will display here</legend>
        <span>Question {currentQuestion}</span>
        <Query user={this.props.user} />
        <Info user={this.props.user} />
        {choicesContent}
        <div className='button-group pull-right'>
        <button type='button' onClick={this.onSaveQuestionClick} className='button'>
          Save Question
        </button>
        <button type='button' onClick={this.onNewQuestionClick} className='button'>
          New Question
        </button>
        </div>
      </div>
    );
  }
});