/**
 * Create Survey React Component - create-survey.js
 * @module
 * @author Matthew Moss
 */
'use strict';
var React = require('react');
var UserName = require('./build/build-user');
var SurveyTitle = require('./build/build-title');
var QuestionContainer = require('./question-container');
var Instructions = require('./build/build-instructions');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'CreateSurvey',
  mixins: [ampersandMixin],

  render: function() {

    return (
      <div className='grid-flex-container'>
        <div className='grid-flex-cell grid-flex-cell-1of3'>
          <h3>Add Survey Details Here</h3>
          <UserName user={this.props.user} />
          <SurveyTitle user={this.props.user} />
          <Instructions user={this.props.user} />
        </div>
        <QuestionContainer user={this.props.user}
          survey={this.props.user.survey} />
      </div>
    );
  }
});
