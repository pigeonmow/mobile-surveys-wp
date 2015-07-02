var React = require('react');
var MultiChoice = require('./multi-choice');
var Preview = require('./preview');
var MultiChoice = require('./multi-choice');

module.exports = React.createClass({
  displayName: 'AddQuestion',
 // this is  a controlled input react form
  
// set the initially selected option displayed when view rendered  
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
 //************************************************************************* 
  // Creating multiple choice question template on click of add button
  addMultiChoice: function (event) {
        // render multiple choice template into <div> in preview
    console.log('I was clicked!');
    alert('Click!');
  },
                 
    // add logic so that form does not display on create page - just when
    // add question tab clicked
  render: function () {
  // need to add onClick handler
    return (
      <div className='container'>
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
  
          <button type='submit' className='button button-primary'
            onClick={this.addMultiChoice}>
            Add
          </button>
        </form>
      </div> 
    );  
  }
});

