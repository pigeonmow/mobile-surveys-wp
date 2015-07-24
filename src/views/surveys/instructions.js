/* Instructions Form Component - instructions.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
//var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'Instructions',
//  mixins: [ampersandMixin],
  // edit method
  onEditClick: function(event) {
    event.preventDefault();
    this.props.survey.editInstructions = true;
  },
  // cancel method
  onCancelClick: function(event) {
    event.preventDefault();
    this.props.survey.editInstructions = false;
    this.setState(this.getInitialState());
  },

  onSubmit: function(event) {
    event.preventDefault();
    this.props.survey.save(this.state);
    this.props.survey.editInstructions = false;
  },

  getInitialState: function() {
    return {
      instructions: this.props.survey.instructions
    };
  },
  // onChange handler - getting the event
  onInstructionsChange: function(event) {
    this.setState({
      instructions: event.target.value
    });
  },

  render: function() {
  //  console.log('this.props - instructions.js ' + this.props);
   // console.log('this.state - instructions.js ' + this.state);
    var content;
    // branching of render method set up - assigning to content var
    if (this.props.survey.editInstructions === true) {
      // Edit mode
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
        <legend>Respondent Instructions</legend>
            <textarea value={this.state.instructions}
              onChange={this.onInstructionsChange} name='user' />
            <button type='submit'>
                    Save
            </button>
            <button type='button' onClick={this.onCancelClick}>
                    Cancel
            </button>
          </fieldset>
        </form>
      );
    } else {
      // display mode
      content = (
        <div>
          <span>{this.props.survey.instructions}</span>
          <span>
            <button type='button' onClick={this.onEditClick}>
                  Edit
            </button>
          </span>
        </div>
      );
    }

    return (
      <div>
      {content}
      </div>
    );
  }
});
