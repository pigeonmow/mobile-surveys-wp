/* Answer Choice React Component - answer-choice.js
 * 08/08/2015
 * Author: Matthew Moss
 * Based on: ..........................
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