/* Question Slider Component - question-slider.js
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

    return (
      <div>

        Questions will render here...
        <Query />
        <Info  />
        <MultiChoice  />
      </div>
    );
  }
});
