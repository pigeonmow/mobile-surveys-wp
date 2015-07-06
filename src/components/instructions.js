// Instructions React component - src/components/instructions.js
// sub view of src/views/preview.js
// 
var React = require('react');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'Instructions',
  // set the initially selected option displayed when view rendered  
 getInitialState: function () {
     return {
      instructions: 'Enter any instructions to respondents here...'
    };
  },

// methods to deal with changing each form field
    onInstructionsChange: function(event) {
    this.setState({
      instructions: event.target.instructions
    });
  },
  
  render: function () {
    return (
      <div className='instructions'>
      
        <textarea name='instructions' className='form-input' value={this.state.instructions} onChange={this.onInstructionsChange} />

        <button type='submit' className='button button-outlined button-small' onClick=''>
            Save
        </button>
      
      </div>
    );
  }
});