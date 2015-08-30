/* Query React Component - query.js
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'Query',
  
  getInitialState: function() {
    return {
      query: ''
    }
  },

  // Query field stuff
  // handlers
  onQueryChange: function(event) {
    this.setState({
      query: event.target.value
    });
  },
  //save button
  onQuerySubmit: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.user.survey.length;
    var currentQuestion = this.props.user.survey.get(lastQuestion);
    currentQuestion.query = this.state.query;
    this.props.user.editQuery = false;
  },
  // edit button
  onEditQueryClick: function(event) {
    event.preventDefault();
    //var lastQuestion = this.props.survey.length;
    // alert('editing'); // for testing
    this.props.user.editQuery = true;
  },
  
  render: function() {
    var lastQuestion = this.props.user.survey.length;
    // Query field
    var queryContent;
    if (this.props.user.editQuery === true) {
      // Edit mode
      queryContent = (
        <form onSubmit={this.onQuerySubmit}>
          <fieldset>
            <legend>Query</legend>
            <input type='text' name='query' value={this.state.query}
              onChange={this.onQueryChange} className='form-input'/>
            <button type='submit' className='button'>
              Save
            </button>
          </fieldset>
        </form>
      );
    } else {
      // display mode
      queryContent = (
        <fieldset>
          <legend>Query</legend>
         <span>{this.props.user.survey.get(lastQuestion).query}</span>
          <span>
            <button onClick={this.onEditQueryClick} type='button' className='button pull-right'>
              Edit
            </button>
          </span>
        </fieldset>
      );
    }   
    return (
      <div>
        {queryContent}
      </div>    
    );
  }
  
});
