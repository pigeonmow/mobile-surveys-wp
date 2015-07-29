/* Question Query Component - query.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'Query',
  mixins: [ampersandMixin],
  
    getInitialState: function() {
      var lastQuestion = this.props.survey.length;
    return {
      query: this.props.survey.get(lastQuestion).query
    };
  },
  // handlers
  onQueryChange: function(event) {
    this.setState({
      query: event.target.value
    });
  },
  //save button
  onSubmit: function(event) {
    event.preventDefault();
    //alert('just checking!'); // testing
    var lastQuestion = this.props.survey.length;
    var currentQuestion = this.props.survey.get(lastQuestion);
    currentQuestion.query = this.state.query;
    currentQuestion.editQuery = false;
  },
  // edit button
  onEditClick: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.survey.length;
   // alert('editing'); // for testing
    this.props.survey.get(lastQuestion).editQuery = true;
  },
  
  
  render: function() {
    console.log(this.props.survey.get(1).editQuery);
    var lastQuestion = this.props.survey.length; 
    var content;
    
    if (this.props.survey.get(lastQuestion).editQuery === true) {
      // Edit mode
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Query</legend>
            <input type='text' name='query' value={this.state.query}
              onChange={this.onQueryChange} />
            <button type='submit'>
              Save
            </button>
          </fieldset>
        </form>
      );
    } else {
      // display mode
      content = (
        <div>
          <span>{this.props.survey.get(lastQuestion).query}</span>
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