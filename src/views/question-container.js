/* Question Container React Component - question-container.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var Choice = require('./components/choice');
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
      query: '',
      info: '',
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
  // Query field stuff
  // handlers
  onQueryChange: function(event) {
    this.setState({
      query: event.target.value
    });
  },
  //save button
  onQuerySubmit: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.survey.length;
    var currentQuestion = this.props.survey.get(lastQuestion);
    currentQuestion.query = this.state.query;
    this.props.user.editQuery = false;
  },
  // edit button
  onEditQueryClick: function(event) {
    event.preventDefault();
    //var lastQuestion = this.props.survey.length;
    // alert('editing'); // for testing
    this.props.user.editQuery = true;
  },
  // Info field stuff
  onInfoChange: function(event) {
    this.setState({
      info: event.target.value
    });
  },

  onInfoSubmit: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.survey.length;
    var currentQuestion = this.props.survey.get(lastQuestion);
    currentQuestion.info = this.state.info;
    this.props.user.editInfo = false;
  },

  onEditInfoClick: function(event) {
    event.preventDefault();
    //var lastQuestion = this.props.survey.length;
    this.props.user.editInfo = true;
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
    // Query field
    var queryContent;
    if (this.props.user.editQuery === true) {
      // Edit mode
      queryContent = (
        <form onSubmit={this.onQuerySubmit}>
          <fieldset>
            <legend>Query</legend>
            <input type='text' name='query' value={this.state.query}
              onChange={this.onQueryChange} className='form-input'/>
            <button type='submit' className='button'>
              Save
            </button>
          </fieldset>
        </form>
      );
    } else {
      // display mode
      queryContent = (
        <fieldset>
          <legend>Query</legend>
         <span>{this.props.survey.get(lastQuestion).query}</span>
          <span>
            <button onClick={this.onEditQueryClick} type='button' className='button pull-right'>
              Edit
            </button>
          </span>
        </fieldset>
      );
    }
    // Info field
    var infoContent;
    if (this.props.user.editInfo === true) {
      infoContent = (
        <form onSubmit={this.onInfoSubmit}>
          <fieldset>
            <legend>Question Info</legend>
            <textarea value={this.state.info} onChange={this.onInfoChange} className='form-input'/>
            <button type='submit' className='button'>Save</button>
          </fieldset>
        </form>
      );
    } else {
      infoContent = (
        <fieldset>
          <legend>Question Info</legend>
          <span>{this.props.survey.get(lastQuestion).info}</span>
          <button onClick={this.onEditInfoClick} type='button' className='button pull-right'>Edit</button>
        </fieldset>
      );
    }
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
        {queryContent}
        {infoContent}
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