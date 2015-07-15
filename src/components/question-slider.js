// container for questions
var React = require('react');
var MultiChoice = require('../questions/multi-choice');
var Query = require('../questions/components/query');
var Info = require('../questions/components/info');


module.exports = React.createClass({
  displayName: 'QuestionSlider',
  
  render: function() {
    // take question type data from model, use map method to return
    // list of single questions
  // checks which single question is active and passes 'active' 
  // attribute to that question component
  
    return (
      <div className='question-slider'>

        Questions will render here...
        <Query question={this.props.question} />
        <Info question={this.props.question} />
        <MultiChoice question={this.props.question} />
      </div>
    );
  }
});