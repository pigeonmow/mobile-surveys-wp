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
    this.props.user.instructions = this.state.instructions;
    this.props.user.saveInstructionsToLocalStorage(this.props.user.instructions);
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
        <legend>Survey Introduction</legend>
            <textarea value={this.state.instructions} onChange={this.onInstructionsChange} name='instructions' className='form-input'/>
            <button type='submit' className='button'>
                    Save
            </button>
          </fieldset>
        </form>
      );
    } else {
      // display mode
      content = (
        <fieldset>
          <legend>Respondent instructions</legend>
          <span>{this.props.user.instructions}</span>
          <span>
            <button type='button' onClick={this.onEditClick} className='button pull-right'>
                  Edit
            </button>
          </span>
        </fieldset>
      );
    }
      return (
        <div>
        {content}
        </div>
      );
  }
  
});