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

  // cancel method
  onCancelClick: function(event) {
    event.preventDefault();
    this.props.survey.editing = false;
    this.setState(this.getInitialState());
  },
    
  // save method -- OR this could be form onSubmit method instead
/*  onSaveClick: function(event) {
    event.preventDefault();
      
  },
  */
  onSubmit: function(event) {
    event.preventDefault();
    this.props.survey.save();
    this.props.survey.editing = false;
  },
  // initial state - MOVE UP  TO HIGHR COMPONENT & PASS DOWN!!!!!!*****************
  getInitialState: function() {
    return {
      username: this.props.survey.username
    }
  },
  
  // onChange handler - getting the event
  onUsernameChange: function(event) {
    // modifying state within a component with the React setState() method it will
    // re-render unless you specify it not to
    this.setState({
      // event.target - extracting whatever caused the event
      // could use .slice() on end here if wish to keep first however many digits
      // as standard uneditable (see label-item.js)
      username: event.target.value
    })
  },
  
  render: function() {
    var content;
    
    // branching of render method set up - assigning to content var
    if (this.props.survey.editing === true) {
      // Edit mode
      content = (
        <div>
        <form  onSubmit={this.onSubmit}>
          <fieldset>
            <input type='text' value={this.state.username} onChange={this.onUsernameChange} className='form-input' name='user' />
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