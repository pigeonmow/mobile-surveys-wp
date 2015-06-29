// Home Page View - src/views/home.js
var React = require('react');
var LinkHelper = require('../components/link-helper');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'HomePage',
  // render method
  render: function () {
    return (
      // className is a React specific thingy
      // but that's because that's the actual name on the element in the DOM
      // another is 'for' which becomes 'htmlFor'
      <LinkHelper className='container'>
        <header>
          <h1>Survey</h1>
        </header>
        <div>
          <p>Welcome, here you can create Surveys!</p>
          <a href='/create' className='button button-outlined'>
            Create Survey
          </a>
        </div>
      </LinkHelper>
    );
  }
});
