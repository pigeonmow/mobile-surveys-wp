// Preview Survey View - src/components/preview.js
var React = require('react');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'PreviewPage',
  // set the initially selected option displayed when view rendered  
  getInitialState: function () {
    return {
      user_name: 'Enter your user name',
      survey_title: 'Enter the survey title',
      instructions: 'Enter any instructions to respondents here...'
    };
  },

// deal with changing selection
  handleChange: function(event) {
    this.setState({
      value: event.target.user_name
    });
  },
  
  // field restrictions + validations need to be added -- spell check??

  render: function () {
    return (
      <div className='grid-flex-cell' id='preview-survey'>

        <aside className='preview-template'>
          <form action='' method='' id=''>
            <input type='text' className='form-input' name='user-name' value={this.state.user_name} onChange={this.handleChange} />
      
              <button type='submit' className='button button-outlined button-small' onClick=''>
                  Save
              </button>
      
            <input type='text' className='form-input' name='survey-title' value={this.state.survey_title} onChange={this.handleChange} />
      
              <button type='submit' className='button button-outlined button-small' onClick=''>
                  Save
              </button>
      
            <textarea name='instructions' className='form-input' value='Enter any instructions to respondents here...' />
                          
              <button type='submit' className='button button-outlined button-small' onClick=''>
                  Save
              </button>
      
            <div className='question-view'>
              <h2>Question</h2>
              <p>Questions render here as added - will have back/forward buttons</p>
            </div>
      
            <div className='progress-bar'>
              <h2>Elements</h2>
              <p>Any elements added render here - e.g. progress bar</p>
            </div>
      
            <div className='thanks-view'>
              <h2>Thanks</h2>
              <p>make sure to thank your respondents</p>
            </div>
      
            <div className='submit-button'>
              <button type='submit' className='button button-outlined' onClick=''>
                  Save
              </button>
              <button type='submit' className='button button-outlined' onClick=''>
                  Publish
              </button>
            </div>
      
          </form>
        </aside>  
      </div>
    );
  }
});
