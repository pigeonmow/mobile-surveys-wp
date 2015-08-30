/* Question Choice React Component - choice.js
 * 01/07/2015
 * Author: Matthew Moss
 * Based on: ..........................
 */
'use strict';
var React = require('react');

module.exports = React.createClass({

  render: function() {

    var createChoice = function(choiceElement, index) {
      return (
        <li key={index + choiceElement}>
          Choice Number:
          {index}<span> </span>
          <input className='radio-button' type='radio' name='answer-choice' /><span> </span>
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
