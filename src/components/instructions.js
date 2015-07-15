var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'Instructions',
  mixins: [ampersandMixin],
  
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
    }
  },
  
  // onChange handler - getting the event
  onInstructionsChange: function(event) {
    this.setState({
      instructions: event.target.value
    })
  },
  
  render: function() {
    var content;
    
    // branching of render method set up - assigning to content var
    if (this.props.survey.editInstructions === true) {
      // Edit mode
      content = (
        <div>
        <form  onSubmit={this.onSubmit}>
          <fieldset>
            <textarea value={this.state.instructions} onChange={this.onInstructionsChange} className='form-input' name='user' />
            <button type='submit' className='button button-outlined button-small'>
                    Save
            </button>
            <button type='button' className='button button-outlined button-small' onClick={this.onCancelClick}>
                    Cancel
            </button>
          </fieldset>
        </form>
        </div>
      );
    } else {
      // display mode
      content = (
        <div className='user'>
          <span>{this.props.survey.instructions}</span>
          <span>          
            <button type='button' className='button button-outlined button-small' onClick={this.onEditClick}>
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