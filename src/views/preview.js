/* Preview Survey React Component - preview.js
 * 28/07/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
var Question = require('./components/question');
var Thanks = require('./components/thanks');
var Respondent = require('./components/respondent');
var Intro = require('./components/introduction');

// maybe use ternary logic for fields not yet populated...?
// condition ? expr1 : expr2 

module.exports = React.createClass({
  displayName: 'PreviewSurvey',
  
  getInitialState: function () {
    return {
      progress: 'start'
    }
  },
  
  myfunction: (function(event) {
    var qNum = 0;


    return function() {
      qNum += 1;
      return qNum;
    }
      
  }()),
  
  onNextClick: function(event) {
    var qNum = this.myfunction();

 // console.log(this.props.user.survey.get(qNum).questionNumber);
   
    //alert('click next you did! & nothing happened...yet');
    if (this.state.progress === 'start') {
      this.setState(
        {progress: 'question'}
      );
      // at this point need logic to step through questions - 
      // see in question.js component --- need to use survey.length to determine
      // the end! - maybe ternery in here...?
    } else if (this.state.progress === 'question') {

      // here's my problem because currentQuestion is staying at 1 
      var currentQuestion = this.props.user.survey.get(qNum).questionNumber;
      currentQuestion === this.props.user.survey.length ? 
        this.setState(
          {progress: 'respondent'}
        ) :
        this.setState(
          {progress: 'question'}
        );

    } else if (this.state.progress === 'respondent') {
      this.setState(
        {progress: 'complete'}
      );
    }

  },
  



  render: function() {
    var currentScreen;
    if (this.state.progress === 'start') {
      currentScreen = (
        <Intro />
      );
    } else if (this.state.progress === 'question') {
      currentScreen = (
        <Question user={this.props.user} />
      );
    } else if (this.state.progress === 'respondent') {
      currentScreen = (
        <Respondent />
      );                             
    } else {
      currentScreen = (
        <Thanks />
      );
    }
      
    return (
      <div>


        <h2>Your survey will look like this...</h2>
        <form>
          <div>
            Something, something, something else...
              {currentScreen}
          <button type='button'>Save for later</button>
            <button type='button' onClick={this.onNextClick}>Next</button>
          </div>

        </form>
      </div>
    );
  }
});
