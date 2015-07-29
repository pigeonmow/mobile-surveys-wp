/* Question Container React Component - question-view.js
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

  
  render: function() {
    //console.log(this.state.choices);
    return (
      <fieldset>
        <legend>Questions will display here</legend>
        <Query survey={this.props.survey} />
        <Info survey={this.props.survey} />
        <QuestionView survey={this.props.survey} choices={this.state.choices} />

      </fieldset>
    );
  }
});