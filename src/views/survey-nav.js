var React = require('react');



module.exports = React.createClass({
  displayName: 'SurveyNav',
  getInitialState: function () {
    return {
      value: 'multi'
    }
  },

// deal with changing selection
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  render: function () {
    return (
        <form>
          <label htmlFor='select' className='form-element'>
            New Question
          <select name='new-question' value={this.state.value}
            onChange={this.handleChange}>
            <option value='multi'>Multiple Choice</option>
            <option value='drop'>Drop Down</option>
            <option value='text'>Text Box</option>
          </select>
          </label>
  
          <button type='submit' className='button button-primary'>
            Add
          </button>
        </form>
    );
  }
});