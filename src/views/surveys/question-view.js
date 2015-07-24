/* Question View Component - question-view.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
// container for questions
var React = require('react');
var MultiChoice = require('../questions/multi-choice');
var Query = require('../questions/components/query');
var Info = require('../questions/components/info');

module.exports = React.createClass({
  displayName: 'QuestionSlider',

  render: function() {
//    console.log('this.props - question-view.js ' + this.props);
 //   console.log('this.state - question-view.js ' + this.state);
    return (
      <div>
        <fieldset>
          <legend>Questions will render here...</legend>
          <Query survey={this.props.survey} />
          <Info  survey={this.props.survey} />
          <MultiChoice survey={this.props.survey} />
        </fieldset>
      </div>
    );
  }
});
     //   
