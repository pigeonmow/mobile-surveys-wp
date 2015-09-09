/**
 * Survey Title React Controlled Form Component - build-title.js
 * @module
 * @author Matthew Moss
 */
'use strict';
var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'SurveyTitle',
  mixins: [ampersandMixin],

  getInitialState: function() {
    return {
      surveyTitle: this.props.user.surveyTitle
    };
  },
  // onChange handler
  onSurveyTitleChange: function(event) {
    this.setState({
      surveyTitle: event.target.value
    });
  },
  // handle submit
  onSubmit: function(event) {
    event.preventDefault();
    // save to the instance of the user model firstly
    this.props.user.surveyTitle = this.state.surveyTitle;
    // save userName prop to localStorage
    this.props.user.saveTitleToLocalStorage(this.props.user.surveyTitle);
    this.props.user.editSurveyTitle = false;
  },
  // edit button handler
  onEditClick: function(event) {
    event.preventDefault();
    this.props.user.editSurveyTitle = true;
  },

  render: function() {
    var content;
    // branching of render method set up - assigning to content var
    if (this.props.user.editSurveyTitle === true) {
      // Edit mode
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
        <legend>Survey Title</legend>
            <input type='text' value={this.state.surveyTitle}
              onChange={this.onSurveyTitleChange} name='survey-title'
                className='form-input' required />
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
        <legend>Survey title</legend>

          <span>{this.props.user.surveyTitle}</span>
          <span>
            <button type='button' onClick={this.onEditClick}
              className='button pull-right'>
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
