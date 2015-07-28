/* Question Query Component - query.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'Query',
  
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
    console.log(this.props.survey.length);
    var lastQuestion = this.props.survey.length; 
    var content;
    
    if (this.props.survey.get(lastQuestion).editQuery === true) {
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