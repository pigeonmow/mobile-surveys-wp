// Create Survey View - src/views/create.js
var React = require('react');
var AddQuestion = require('../components/add-question');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'CreatePage',
  render: function () {
    return (
      <div className='container'>
        <header>
          <h1>Make a Survey!</h1>
        </header>
      
        <div>
          <p>Please use the tool below to get started with your survey.</p>
      
          <div className='tabbed'>
            <ul className='list-unstyled list-inline tabs'>
              <li><a href='/add-question' className='current-item'>
                    Add Question
                  </a>
              </li>
              <li><a href='/edit-question'>Edit Question</a></li>
              <li><a href='/add-element'>Add Element</a></li>
              <li><a href='/preview'>Preview</a></li>
            </ul>
          </div>
      
          <AddQuestion />
      
        </div>
      </div>
    );
  }
});