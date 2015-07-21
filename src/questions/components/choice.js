var React = require('react');

module.exports = React.createClass({
 // in here we have access to 'this.props.choices' from multi-choice.js -  

  render: function() {
// ****** rewrite so function is not separate?????? ************
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



