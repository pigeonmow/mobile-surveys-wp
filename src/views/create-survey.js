/* Create Survey React Component - create-survey.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var UserName = require('./components/user-name');
var SurveyTitle = require('./components/survey-title');
var QuestionContainer = require('./question-container');
var Instructions = require('./components/instructions');
var ampersandMixin = require('ampersand-react-mixin');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...
// emit change events here - top level component which is stateful & goes
// down the tree
// so this is kinda like the controller... ish - see backbone book for controller info too...
module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'CreateSurvey',
  mixins: [ampersandMixin],
  
  render: function() {

    return (
      <div>
        <UserName user={this.props.user} />
        <SurveyTitle user={this.props.user} />
        <Instructions user={this.props.user} />
        <QuestionContainer user={this.props.user} survey={this.props.user.survey} />
      </div>
    );
  }
});