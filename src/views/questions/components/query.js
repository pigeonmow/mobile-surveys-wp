/* Question Query Component - query.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');

// mixin needed???...**************
module.exports = React.createClass({
  displayName: 'Query',

  // edit method
/*  onEditClick: function(event) {
    event.preventDefault();
    // alert('click edit you did!');
    this.props.survey.questions.editQuery = true;
  },*/
  // cancel method
  /*onCancelClick: function(event) {
    event.preventDefault();
    this.props.survey.questions.models.editQuery = false;
    this.setState(this.getInitialState());
  },*/
  // onSubmit method - or this could be onClick instead???
  onSubmit: function(event) {
    event.preventDefault();
    this.props.survey.questions.add(this.state);
    this.props.survey.editQuery = false;
  },

  getInitialState: function() {
    return {
      query: ''
    };
  },
  // handlers
  onQueryChange: function(event) {
    this.setState({
      query: event.target.value
    });
  },

  render: function() {
    var content;

    if (this.props.survey.editQuery === true) {
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Query</legend>
            <input type='text' name='query' value={this.state.query}
              onChange={this.onQueryChange} />
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
          <span>{this.props.survey}</span>
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
