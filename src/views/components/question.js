/*Multiple Choice Question React Component - question.js
 * 01/07/2015
 * Author: Matthew Moss
 * Based on: ..........................
 */
'use strict';
var React = require('react');
var Choice = require('./choice');

module.exports = React.createClass({
  displayName: 'Question',
  
  // start with empty array & empty text string - choices is an array of strings
  getInitialState: function() {
    return {
      choices: this.props.survey.get(1).choices,
      text: ''
    };
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
    var nextChoices = this.state.choices.concat([this.state.text]);
    this.props.survey.get(1).choices = nextChoices;
    var nextText = '';
    this.setState({choices: nextChoices, text: nextText});
  },
  
  // remove a choice - currently from start of array - needs updating to ask
  // user which choice they wish to remove*************************************
  // using Array.splice()
  onDeleteChoice: function(index) {
    // copy array
    var choicesCopy = this.state.choices.slice();
    // remove element at index
    choicesCopy.splice(index, 1);
    // update the state
    this.setState({choices: choicesCopy});
  },
  
  render: function() {
    console.log(this.props.survey);
   // console.log(this.props.survey.get().choices);

    console.log(this.props.survey.get(2).choices);

    // this is the ACTUAL array in the model - stays empty
    console.log(this.props.survey.get(1).choices);
    // this is the array currently IN STATE - choices add/remove into/from this one when buttons' clicked
    console.log(this.state.choices);

    return (
      <fieldset>
        Test question...
        <Choice choices={this.state.choices} />

          <input onChange={this.onChange} value={this.state.text} />
          <button type='button' onClick={this.onAddChoice}>
            Add Choice</button>
          <button type='button' onClick={this.onDeleteChoice}>
            Delete Choice</button>
      </fieldset>
    );
  }
});