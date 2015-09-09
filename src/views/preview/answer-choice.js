/**
 * Answer Choice React Component - answer-choice.js
 * @module
 * @author Matthew Moss
 * Based on: http://www.randomsnippets.com/2008/02/21/how-to-dynamically-add-
 * form-elements-via-javascript/
 */
'use strict';
var React = require('react');
// for finished survey displaying
module.exports = React.createClass({
  displayName: 'AnswerChoice',
  render: function() {

    var createChoice = function(choiceElement, index) {
      return (
        <li key={index + choiceElement}>
          <input className='radio-button' type='radio' name='answer-choice' />
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
