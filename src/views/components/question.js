/*Multiple Choice Question View React Component - question.js
 * 01/07/2015
 * Author: Matthew Moss
 * Based on: ..........................
 */
'use strict';
var React = require('react');
var Choice = require('./choice');
//var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'QuestionView',
  //mixins: [ampersandMixin],
  getInitialState: function() {
    return {
      choices: this.props.choices
    }
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
   // console.log(this.props.survey.get(1));
   // console.log(lastQuestion);

    console.log(this.props.survey.get(lastQuestion).choices);

    // this is the ACTUAL array in the model - stays empty
   // console.log(this.props.survey.get(1).choices);
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
      <fieldset>
              <button type='button' onClick={this.onSaveClick}>
          Save Current & Add New Question
        </button>
      </fieldset>
      </fieldset>
    );
  }
});