/* Multiple Choice React Component - multi-choice.js
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var Choice = require('./choice');
//var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'MultipleChoice',
  //mixins: [ampersandMixin],
  
  getInitialState: function() {

    
    return {
      choices: this.props.choices,
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
    var lastQuestion = this.props.user.survey.length;
    var nextChoices = this.state.choices.concat([this.state.text]);
    // assign it to the model
    this.props.user.survey.get(lastQuestion).choices = nextChoices;
    var nextText = '';
    this.setState({choices: nextChoices, text: nextText});
  },
  // remove a choice - BUT if user does not
  // enter a number it still deletes choice at index zero - needs fixing*******
  // using Array.splice()
  onDeleteChoice: function(index) {
    var lastQuestion = this.props.user.survey.length;
    var index = prompt('Please enter the answer choice number to delete');
    // if user enters an index delete that one
    if (index != null) {
      // copy array
      var choicesCopy = this.state.choices.slice();
      // remove element at index - in state
      choicesCopy.splice(index, 1);
      // assign it to the model
      this.props.user.survey.get(lastQuestion).choices = choicesCopy;
      // update the state
      this.setState({choices: choicesCopy});
    }
    // if they click cancel - do nothing
  },
  
  onSaveChoicesClick: function() {
   // alert('Saving!');
    this.props.user.editChoices = false;
  },
  
    
  onEditChoicesClick: function(event) {
    event.preventDefault();
    this.props.user.editChoices = true;
  },
  
  render: function() {
    var lastQuestion = this.props.user.survey.length;

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
      <div>
        {choicesContent}
       <button type='button' onClick={this.onSaveChoicesClick} className='button'>
          Save Choices
        </button>
      </div>    
    );
  }
  
});
