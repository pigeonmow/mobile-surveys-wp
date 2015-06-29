// Create Survey View - src/views/create.js
var React = require('react');
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
      
          <nav role='navigation'>
            <ul className='list-unstyled list-inline tabs'>
              <li><a className='current-item'>Add Question</a></li>
              <li><a>Edit Question</a></li>
              <li><a>Add Element</a></li>
              <li><a href='/survey'>Preview</a></li>
            </ul>
          </nav>
      
          <form>
              <label htmlFor='radio' className='input-radio form-element'>
                <input type='radio'>
                New Question
                </input>
              </label>
              <select className='form-element'>
                <option>Multiple Choice</option>
                <option>Drop Down</option>
                <option>Text Box</option>
              </select>
              <button type='submit' className='button button-primary'>
                Add
              </button>
          </form>
      
        </div>
      </div>
    );
  }
});