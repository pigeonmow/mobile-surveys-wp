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
  
  onNextClick: function() {
    //alert('click next you did! & nothing happened...yet');
    if (this.state.progress === 'start') {
      this.setState(
        {progress: 'question'}
      );
      // at this point need logic to step through questions - 
      // see in question.js component --- 
    } else if (this.state.progress === 'question') {
      this.setState(
        {progress: 'respondent'}
      );
    } else if (this.state.progress === 'respondent') {
      this.setState(
        {progress: 'complete'}
      );
    }
  },
  
    //another closure, I think --- is it module pattern??
  // so far so good - needs something for when it reaches end of questions...
  // also where will this function live - the actual 'NEXT' button is in
  // preview.js - should this be or should the button relocate here to the 
  // question view - what's more logical??
  // plus of course, need to get it so ir renders the questions - not just 
  // console.log! 
  myfunction: (function(event) {
    var qNum = 0;
    console.log(qNum);
    console.log('outer!');

    return function() {
      qNum += 1;
      console.log(qNum);
      console.log('inner!')
      console.log(this.props.user.survey.get(qNum).query);
      //return qNum;
    }
      
  }()),


  render: function() {
    //console.log(this.props.user.survey);  
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
            <button type='button' onClick={this.myfunction}>Next</button>
          </div>

        </form>
      </div>
    );
  }
});
