/* Question Container React Component - question-container.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var Choice = require('./components/choice');
//var QuestionView = require('./components/question');
//var Query = require('./components/query');
//var Info = require('./components/info');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'QuestionContainer',
  mixins: [ampersandMixin],
      // start with empty text string - choices is an array of strings
  getInitialState: function() {
    var choices;
    // check if any question models already exist
    if (typeof this.props.survey.get(lastQuestion) != 'undefined') {
      // if they do set the last one's choices to choices var
      var lastQuestion = this.props.survey.length;
      choices = this.props.survey.get(lastQuestion).choices;
    } else {
     // if not create a new question model & set its choices to choices var
      app.user.survey.add({ });
      var lastQuestion = app.user.survey.length;
      choices = app.user.survey.get(lastQuestion).choices;
    };
      
    return {
      choices: choices,
      text: '',
      query: this.props.survey.get(lastQuestion).query,
      info: this.props.survey.get(lastQuestion).info
    };
  },
  
  // handlers
  onQueryChange: function(event) {
    this.setState({
      query: event.target.value
    });
  },
  
    // method to add a new empty question
  onSaveQuestionClick: function() {
    // alert('new question'); // test purposes
    // save the current question to the current model
    // this may already be implemented I think...yes it happens when you type
        this.props.survey.add({});
    // so just need to render the new question into this container
    // which I think is just setting the state
    
    var lastQuestion = this.props.survey.length;
    // add next empty question model

    var newChoices = this.props.survey.get(lastQuestion).choices;
    this.replaceState({ choices: newChoices });
  },
  
  //save button
  onQuerySubmit: function(event) {
    event.preventDefault();
    //alert('just checking!'); // testing
    var lastQuestion = this.props.survey.length;
    var currentQuestion = this.props.survey.get(lastQuestion);
    currentQuestion.query = this.state.query;
    currentQuestion.editQuery = false;
  },
  // edit button
  onEditQueryClick: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.survey.length;
   // alert('editing'); // for testing
    this.props.survey.get(lastQuestion).editQuery = true;
  },
  
  
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
    currentQuestion.editInfo = false;
  },
  
  onEditInfoClick: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.survey.length;
    this.props.survey.get(lastQuestion).editInfo = true;
  },
  
  
 // when you type state updates
  onChange: function(event) {
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
  
  // remove a choice - currently from start of array - needs updating to ask
  // user which choice they wish to remove***this is done BUT if user does not enter a number it still deletes choice at index zero - needs fixing**********
  // using Array.splice()
  onDeleteChoice: function(index) {
    var lastQuestion = this.props.survey.length;
    var index = prompt('Please enter the choice index to delete');
    // if user enters an index delete that one
    if (index != null) {
    // copy array
    var choicesCopy = this.state.choices.slice();
    // remove element at index - in state
    choicesCopy.splice(index, 1);
    // assign it to the model 
    this.props.survey.get(lastQuestion).choices = choicesCopy;
    // update the state
    this.setState({ choices: choicesCopy });
    };
      
    // if they click cancel - do nothing      

  },
  
  
  render: function() {
    var lastQuestion = this.props.survey.length;
    var queryContent;
    
    if (this.props.survey.get(lastQuestion).editQuery === true) {
      // Edit mode
      queryContent = (
        <form onSubmit={this.onQuerySubmit}>
          <fieldset>
            <legend>Query</legend>
            <input type='text' name='query' value={this.state.query}
              onChange={this.onQueryChange} />
            <button type='submit'>
              Save
            </button>
          </fieldset>
        </form>
      );
    } else {
      // display mode
      queryContent = (
        <div>
          <span>{this.props.survey.get(lastQuestion).query}</span>
          <span>
            <button onClick={this.onEditQueryClick} type='button'>
              Edit
            </button>
          </span>
        </div>
      );
    }
    
    var infoContent;
    
    if (this.props.survey.get(lastQuestion).editInfo === true) {
      infoContent = (
        <form onSubmit={this.onInfoSubmit}>
          <fieldset>
            <legend>Question Info</legend>
            <textarea value={this.state.info} onChange={this.onInfoChange} />
            <button type='submit'>Save</button>
          </fieldset>
        </form>
      );
    } else {
      infoContent = (
        <div>
          <span>{this.props.survey.get(lastQuestion).info}</span>
        
          <button onClick={this.onEditInfoClick} type='button'>Edit</button>
        </div>
      );
    }
    
    return (
      <div>
        <legend>Questions will display here</legend>
    
        {queryContent}
  
    
        {infoContent}
    <div>
        <Choice choices={this.state.choices} />

          <input onChange={this.onChange} value={this.state.text} />
          <button type='button' onClick={this.onAddChoice}>
            Add Choice</button>
          <button type='button' onClick={this.onDeleteChoice}>
            Delete Choice</button>
      </div>
              <button type='button' onClick={this.onSaveQuestionClick}>
          Save Question
        </button>
                    <button type='button' >
          New Question
        </button>
      </div>
    );
  }
});