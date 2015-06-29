// Survey View - src/views/survey.js
var React = require('react');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'SurveyPage',
  
  render: function () {
    return (
      <div className='container'>
        <header>
          <h1>Your Survey</h1>
        </header>

      </div>
    );
  }
});