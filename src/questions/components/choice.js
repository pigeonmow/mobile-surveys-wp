/* Question Choice Component - choice.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');

module.exports = React.createClass({
 // in here we have access to 'this.props.choices' from multi-choice.js
  render: function() {

    var createChoice = function(choiceElement, index) {
      return (
        <li key={index + choiceElement}>
          {index}
          <input type='radio' name='answer-choice' />
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
