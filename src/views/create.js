/* Create View Component - create.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...
// emit change events here - top level component which is stateful & goes
// down the tree
// so this is kinda like the controller...
// ownees of this component
var UserName = require('./surveys/username');
var Title = require('./surveys/title');
var Instructions = require('./surveys/instructions');
var QuestionView = require('./surveys/question-view');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'CreatePage',
  mixins: [ampersandMixin],
  
  getInitialState: function() {
    return {
      value: 'multi'
    };
  },
  // deal with changing selection
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  //Add question button handler
  onAddClick: function(event) {
    alert('Adding...');
  },

  render: function() {

    return (
      <div>
          <UserName user={this.props.user} />
          <Title survey={this.props.survey} />
          <Instructions survey={this.props.survey} />
          <QuestionView survey={this.props.survey} />
          <button type='button' onClick={this.onAddClick}>
            Add Question
          </button>
      </div>
    );
  }

});
