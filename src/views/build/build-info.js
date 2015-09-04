/* Question Info React Component - info.js
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'QuestionInfo',
  
  getInitialState: function() {
    return {
      info: ''
    }
  },

    // Info field stuff
  onInfoChange: function(event) {
    this.setState({
      info: event.target.value
    });
  },

  onInfoSubmit: function(event) {
    event.preventDefault();
    var lastQuestion = this.props.user.survey.length;
    var currentQuestion = this.props.user.survey.get(lastQuestion);
    currentQuestion.info = this.state.info;
    this.props.user.editInfo = false;
  },

  onEditInfoClick: function(event) {
    event.preventDefault();
    //var lastQuestion = this.props.survey.length;
    this.props.user.editInfo = true;
  },

  
  render: function() {
    var lastQuestion = this.props.user.survey.length;
  
    // Info field
    var infoContent;
    if (this.props.user.editInfo === true) {
      infoContent = (
        <form onSubmit={this.onInfoSubmit}>
          <fieldset>
            <legend>Question Info</legend>
            <textarea value={this.state.info} onChange={this.onInfoChange} className='form-input'/>
            <button type='submit' className='button'>Save</button>
          </fieldset>
        </form>
      );
    } else {
      infoContent = (
        <fieldset>
          <legend>Question Info</legend>
          <span>{this.props.user.survey.get(lastQuestion).info}</span>
          <button onClick={this.onEditInfoClick} type='button' className='button pull-right'>Edit</button>
        </fieldset>
      );
    }
    return (
      <div>
        {infoContent}
      </div>    
    );
  }
  
});
