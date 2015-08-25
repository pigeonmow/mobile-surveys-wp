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
  
  onSaveSurveyClick: function(event) {
    alert('clicked!');
    // Convert all survey data to JSON ready to persist to server
    // JSON.stringify implicitly calls toJSON which calls serialize
    // see Ampersand docs for these methods
    var surveyJSON = JSON.stringify(app.user);
    console.log(surveyJSON);
    // call hxr request function
    
    // reset the app after persisting to server
  },
  
  // test set up AJAX - GET method - works! - based on MDN AJAX getting started - using asynchronous request*************************
  makeRequest: function(url) {
    // instantiate XMLHttpRequest object
    var request = new XMLHttpRequest();
    // assign the function to handle the response
    request.onreadystatechange = alertContents;
    // make the request
    // open params: method, url, is request async? (opt - default true)
    request.open('GET', url);
    // send param: data to send to server (using JSON here)
    request.send();
    
    // function to handle the response
    function alertContents() {
      // handle exception if server goes down
      try {
        // check request state
        if (request.readyState === 4) {
          // it's all ready so...
          // check server response code
          if (request.status === 200) {
            // great! - show contents of the html file
            alert(request.responseText);
          } else {
            // some problem
            alert('something went wrong');
          }
        } else {
          // still waiting...
        }
      }
      catch(exception) {
        alert('Caught Exception: ' + exception.description)
      }
    }
  },
  // test GET from localhost
  testGET: function() {
    alert('testing xhr request');
    this.makeRequest('http://www.mattdmoss.co.uk/index.php');
  },
  
  // sending to server - based on MDN AJAX getting started - using asynchronous request********TODO - rename 'alertContents' 
  createRequest: function(url, surveyJSON) {
    // instantiate XMLHttpRequest object
    var request = new XMLHttpRequest();
    // assign the function to handle the response
    request.onreadystatechange = alertContents;
    // make the request
    // open params: method, url, is request async? (opt - default true)
    request.open('POST', '/data.php');
    // should probably add setRequestHeader here...
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // send param: data to send to server (using JSON here)
    request.send(JSON.stringify({name: 'bob', age: '33'}));
    
    // function to handle the response
    function alertContents() {
      // handle exception if server goes down
      try {
        // check request state
        if (request.readyState === 4) {
          // it's all ready so...
          // check server response code
          if (request.status === 200) {
            // great! - show contents of the html file
            alert(request.responseText);
          } else {
            // some problem
            alert('something went wrong');
          }
        } else {
          // still waiting...
        }
      }
      catch(exception) {
        alert('Caught Exception: ' + exception.description)
      }
    }
  },
  
  // test POST from localhost
/*  testPOST: function(event) {
    event.preventDefault;
    alert('testing xhr request');
    var surveyJSON = JSON.stringify({"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]});
    this.createRequest('./data', surveyJSON);
  },
  */



  render: function() {
    var currentScreen;
    if (this.state.progress === 'start') {
      currentScreen = (
        <Intro user={this.props.user} />
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
    
    var navButtons;
    if (this.state.progress !== 'complete') {
      navButtons = (
        <div>
          <button type='button' className='button' disabled>Save for later</button>
          <button type='button' className='button' onClick={this.onNextClick}>Next</button>
        </div>
      );
    } else {
      navButtons = (
        <div>
          <button type='button' className='button' disabled>Save for later</button>
          <button type='button' className='button' disabled>Submit Your Answers</button>
        </div>
      );
    }
      
    return (
      <div>


        <h2>Your survey will look like this...</h2>
        <form>
          <div>
            {currentScreen}
            {navButtons}
          </div>
          <div className='save-button'>
          <button type='button' className='button pull-right' onClick={this.onSaveSurveyClick}>Save Your Survey</button>
          <button type='button' onClick={this.testGET}>test GET button</button>
          <button type='button' onClick={this.createRequest}>test POST button</button>
          </div>
        </form>
      </div>
    );
  }
});
