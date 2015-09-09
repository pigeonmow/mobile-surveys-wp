/**
 * Question Choice React Component - choice.js
 * @module
 * @author Matthew Moss
 * Based on: http://www.randomsnippets.com/2008/02/21/how-to-dynamically-add-
 * form-elements-via-javascript/
 */
'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'QuestionChoice',
  render: function() {

    var createChoice = function(choiceElement, index) {
      return (
        <li key={index + choiceElement}>
          Choice Number:
          {index}<span> </span>
          <input className='radio-button' type='radio' name='answer-choice' />
          <span> </span>
          {choiceElement}
        </li>
      );
    };
    return (
      <div>
      <ul>{this.props.choices.map(createChoice)}</ul>
      </div>
    );
  }
});
