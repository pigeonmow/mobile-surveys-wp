// Preview Survey View - src/components/preview.js
var React = require('react');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'PreviewPage',
  
  
  // make preview display on RHS of create view
  // need to make this a CONTROLLED component
  // the react textarea children thing needs to be fixed
  render: function () {
    return (
      <div className='grid-flex-cell' id='preview-survey'>

        <aside className='preview-template'>
          <form action='' method='' id=''>
            <input type='text' className='form-input' name='user-name' value='Enter your username' />
                          <button type='submit' className='button button-outlined button-small' onClick=''>
                  Save
              </button>
            <input type='text' className='form-input' name='survey-title' 
              value='Enter the survey title' />
                            <button type='submit' className='button button-outlined button-small' onClick=''>
                  Save
              </button>
            <textarea name='instructions' className='form-input'>
              Enter any instructions to respondents here...
            </textarea>
                            <button type='submit' className='button button-outlined button-small' onClick=''>
                  Save
              </button>
            <div className='question-view'>
              <p>Questions render here as added - will have back/forward buttons</p>
            </div>
            <div className='progress-bar'>
              <p>Any elements added render here - e.g. progress bar</p>
            </div>
            <div className='submit-button'>
              <button type='submit' className='button button-outlined' onClick=''>
                  Save
              </button>
              <button type='submit' className='button button-outlined' onClick=''>
                  Publish
              </button>
            </div>
            <div className='thanks-view'>
              <p>make sure to thank your respondents</p>
            </div>
          </form>
        </aside>  
      </div>
    );
  }
});
