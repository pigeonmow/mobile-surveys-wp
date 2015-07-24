/* Question Information Component - info.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
// mixin needed???...**************
module.exports = React.createClass({
  displayName: 'Info',
       // edit method
/*  onEditClick: function(event) {
    event.preventDefault();
    // alert('click edit you did!');
    this.props.question.editInfo = true;
  },*/
  // cancel method
/*  onCancelClick: function(event) {
    event.preventDefault();
    this.props.question.editInfo = false;
    this.setState(this.getInitialState());
  },*/
  // onSubmit method - or this could be onClick instead???
/*  onSubmit: function(event) {
    event.preventDefault();
    this.props.question.save(this.state);
    this.props.question.editInfo = false;
  },*/

  /*getInitialState: function() {
    return {
      info: this.props.info
    };
  },*/
  // handlers
/*  onInfoChange: function(event) {
    this.setState({
      info: event.target.value
    });
  },*/

  render: function() {
    var content;

    if (this.props.editInfo === true) {
      content = (
        <form onSubmit={this.onSubmit}>
         <fieldset>
            <textarea name='info' value={this.state.info}
              onChange={this.onInfoChange} />
            <button type='submit'>
              Save
            </button>
            <button onClick={this.onCancelClick} type='button'>
              Cancel
            </button>
          </fieldset>
        </form>
      );
    } else {
      content = (
        <div>
          <span>{this.props.info}</span>
          <span>
            <button onClick={this.onEditClick} type='button'>
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
