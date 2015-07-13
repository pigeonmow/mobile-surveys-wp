// User name field
var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'User',
  mixins: [ampersandMixin],
  
      // edit method
  onEditClick: function(event) {
    event.preventDefault();
    // alert('click edit you did!');
    this.props.survey.editing = true;
  },
  
  render: function() {
    var content;
    
    // branching of render method set up - assigning to content var
    if (this.props.survey.editing === true) {
      // Edit mode
      content = (
        <div>
          <fieldset>
            <input type='text' className='form-input' name='user' placeholder='Enter your user name'/>
            <button type='button' className='button button-outlined button-small'>
                    Save
            </button>
            <button type='button' className='button button-outlined button-small'>
                    Cancel
            </button>
          </fieldset>
        </div>
      );
    } else {
      // display mode
      content = (
        <div className='user'>
          <span>{this.props.survey.username}</span>
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