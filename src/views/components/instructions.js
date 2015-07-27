/* Instructions React Controlled Form Component - instructions.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'Instructions',
  mixins: [ampersandMixin],
  
  getInitialState: function() {
    return {
      instructions: this.props.user.instructions
    };
  },
  // onChange handler - getting the event
  onInstructionsChange: function(event) {
    this.setState({
      instructions: event.target.value
    });
  },
  
  // edit method
  onEditClick: function(event) {
    event.preventDefault();
    this.props.user.editInstructions = true;
  },

  onSubmit: function(event) {
    event.preventDefault();
    this.props.user.instructions = this.state.instructions
    this.props.user.editInstructions = false;
  },
  
  render: function() {
    var content;
    // branching of render method set up - assigning to content var
    if (this.props.user.editInstructions === true) {
      // Edit mode
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
        <legend>Respondent instructions</legend>
            <textarea value={this.state.instructions} onChange={this.onInstructionsChange} name='instructions' />
            <button type='submit'>
                    Save
            </button>
          </fieldset>
        </form>
      );
    } else {
      // display mode
      content = (
        <div>
          <span>{this.props.user.instructions}</span>
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