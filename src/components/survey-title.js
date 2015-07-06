// Survey title React component - src/components/survey-title.js
// sub view of src/views/preview.js
// 
var React = require('react');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'SurveyTitle',
  // set the initially selected option displayed when view rendered  
 getInitialState: function () {
    return {
      survey_title: 'Enter the survey title'
    };
  },

// methods to deal with changing each form field  
    onTitleChange: function(event) {
    this.setState({
      survey_title: event.target.survey_title
    });
  },

  render: function () {
    return (
      <div className='survey-title'>
      
            <input type='text' className='form-input' name='survey-title' value={this.state.survey_title} onChange={this.onTitleChange} />
      
            <button type='submit' className='button button-outlined button-small' onClick=''>
                Save
            </button>
      
      </div>
    );
  }
});


