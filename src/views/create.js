// Create Survey View - src/views/create.js
var React = require('react');
//var AddQuestion = require('../components/add-question');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...
// ownees of this component
var SurveyView = require('./survey-view');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'CreatePage',
  mixins: [ampersandMixin],
  
  render: function () {
    return (
            <div className='grid-flex-container'>

          <SurveyView survey={this.props.survey} question={this.props.question} />
      </div>
    )
  }

});