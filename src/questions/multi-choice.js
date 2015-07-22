/*Multiple Choice Question Component - multi-choice.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
// Multiple choice question Slide
var React = require('react');
var Choice = require('./components/choice');
// not entirely sure if i need the mixin - try taking it out later to see...
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'MultiChoice',
  mixins: [ampersandMixin],
  // start with empty array & empty text string - choices is an array of strings
  getInitialState: function() {
    return {
      choices: this.props.question.choices,
      text: this.props.question.choice
    };
  },
 // when you type state updates
  onChange: function(event) {
    this.setState({text: event.target.value});
  },
  // when button is clicked Array.concat() creates & returns new array with
  // original contents plus what was typed in
  // then state is set to the new array and empty text string
  onSubmitChoice: function(event) {
    event.preventDefault();
    var nextChoices = this.state.choices.concat([this.state.text]);
    var nextText = this.props.question.choice;
    this.setState({choices: nextChoices, text: nextText});
  },
  // remove a choice - currently from start of array - needs updating to ask
  // user which choice they wish to remove*************************************
  // using Array.splice()
  onRemoveClick: function(index) {
    // copy array
    var choicesCopy = this.state.choices.slice();
    // remove element at index
    choicesCopy.splice(index, 1);
    // update the state
    this.setState({choices: choicesCopy});
  },
  // save the current question to a question collection for this survey instance
  // and reset the form ready for a new question
  // maybe.... trying it on add new button first
  onSaveQuestionClick: function(event) {
    event.preventDefault();
    // console output for debugging

    // saves it to app.question
    var savedQuestion = this.props.question.save(this.state);
    // adds it to app.survey.questions collection
    app.survey.questions.add(
      [savedQuestion]
    );
    // set editing on query and info
    // set initial state on multi-choice --actuallly - set up a new question
    //this.setState({choices: [], text:this.props.question.choice});
  },

  render: function() {
    // <Choice/> renders the results of 'onSubmitChoice' - if it's removed the
    // array is still concatenated - <Choice /> is JUST rendering
    //*** need to sort fact that it's onClick NOT onSubmit and 'Enter' ux issue
    return (
      <div>
        <Choice choices={this.state.choices} />
        <form>
          <input onChange={this.onChange} value={this.state.text} />
          <button type='button' onClick={this.onSubmitChoice}>
            Add choice</button>
          <button type='button' onClick={this.onRemoveClick}>
            Remove a choice</button>
        </form>
        <button type='button' onClick={this.onSaveQuestionClick}>
          Save Question</button>
        <button type='button'>Clear All</button>
      </div>
    );

  }
});
