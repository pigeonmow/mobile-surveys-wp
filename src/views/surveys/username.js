/* User Form Component - user.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
// User name field
var React = require('react');
//var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'User',
 // mixins: [ampersandMixin],
  // edit method
  onEditClick: function(event) {
    event.preventDefault();
    this.props.user.editUser = true;
  },
  // cancel method
  onCancelClick: function(event) {
    event.preventDefault();
    this.props.user.editUser = false;
    this.setState(this.getInitialState());
  },

  onSubmit: function(event) {
    event.preventDefault();
    this.props.user.save(this.state);
    this.props.user.editUser = false;
  },

  getInitialState: function() {
    return {
      userName: this.props.user.userName
    };
  },
  // onChange handler - getting the event
  onUsernameChange: function(event) {
    // modifying state within a component with the React setState() method it
    // will re-render unless you specify it not to
    this.setState({
      // event.target - extracting whatever caused the event
      // could use .slice() on end here if wish to keep first however many
      // digits as standard uneditable (see label-item.js example)
      userName: event.target.value
    });
  },

  render: function() {
    var content;
       // branching of render method set up - assigning to content var
    if (this.props.user.editUser === true) {
      // Edit mode
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>User Name</legend>
            <input type='text' value={this.state.userName}
              onChange={this.onUsernameChange} name='user' />
            <button type='submit'>
                    Save
            </button>
            <button type='button'onClick={this.onCancelClick}>
                    Cancel
            </button>
          </fieldset>
        </form>
      );
    } else {
      // display mode
      content = (
        <div>
          <span>{this.props.user.userName}</span>
          <span>
            <button type='button'onClick={this.onEditClick}>
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
