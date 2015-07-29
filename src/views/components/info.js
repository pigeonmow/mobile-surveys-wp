/* Question Info Component - info.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'Info',
  mixins: [ampersandMixin],
  
  getInitialState: function() {
    var lastQuestion = this.props.survey.length;
    return {
      info: this.props.survey.get(lastQuestion).info
    };
  },
  
  onInfoChange: function(event) {
    this.setState({
      info: event.target.value
    });
  },
  
  onSubmit: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.survey.length;
    var currentQuestion = this.props.survey.get(lastQuestion);
    currentQuestion.info = this.state.info;
    currentQuestion.editInfo = false;
  },
  
  onEditClick: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.survey.length;
    this.props.survey.get(lastQuestion).editInfo = true;
  },
  
  render: function() {
    var lastQuestion = this.props.survey.length;
    var content;
    
    if (this.props.survey.get(lastQuestion).editInfo === true) {
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Question Info</legend>
            <textarea value={this.state.info} onChange={this.onInfoChange} />
            <button type='submit'>Save</button>
          </fieldset>
        </form>
      );
    } else {
      content = (
        <div>
          <span>{this.props.survey.get(lastQuestion).info}</span>
        
          <button onClick={this.onEditClick} type='button'>Edit</button>
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
