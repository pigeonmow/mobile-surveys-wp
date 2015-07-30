/* Question Container React Component - question-container.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var QuestionView = require('./components/question');
var Query = require('./components/query');
var Info = require('./components/info');
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
      text: ''
    };
  },
  
    // method to add a new empty question
  onSaveClick: function() {
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

  
  render: function() {
    var lastQuestion = this.props.survey.length;

    return (
      <fieldset>
        <legend>Questions will display here</legend>
        <Query survey={this.props.survey} />
        <Info survey={this.props.survey} />
        <QuestionView key={this.state.text} survey={this.props.survey} choices={this.state.choices} />
              <button type='button' onClick={this.onSaveClick}>
          Save Current & Add New Question
        </button>
      </fieldset>
    );
  }
});