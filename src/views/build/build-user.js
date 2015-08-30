/* UserName React Controlled Form Component - user-name.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'UserName',
  mixins: [ampersandMixin],
  
  getInitialState: function() {
    return {
      userName: this.props.user.userName
    };
  },
  // onChange handler
  onUserNameChange: function(event) {
    this.setState({
      userName: event.target.value
    }); 
  },
  
  // handle submit
  onSubmit: function(event) {
    event.preventDefault();
    // save to the instance of the user model firstly
    this.props.user.userName = this.state.userName;
    // save userName prop to localStorage
    this.props.user.saveUserToLocalStorage(this.props.user.userName);
    this.props.user.editUserName = false;
  },
  
  // edit button handler
  onEditClick: function(event) {
    event.preventDefault();
    this.props.user.editUserName = true;
  },
  
  render: function() {

    var content;
       // branching of render method set up - assigning to content var
    if (this.props.user.editUserName === true) {
      // Edit mode
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Your User Name</legend>
            <input type='text' value={this.state.userName}
              onChange={this.onUserNameChange} name='username' className='form-input'/>
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
          <legend>User name</legend>
          <span>{this.props.user.userName}</span>
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