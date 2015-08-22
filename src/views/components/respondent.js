/* Respondent React Component - respondent.js
 * 07/08/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
// 
module.exports = React.createClass({
  displayName: 'Respondent',
  getInitialState: function() {
    return {
      name: 'Your Name',
      email: 'Your email'
    };
  },
  
  onNameChange: function(event) {
    this.setState({name: event.target.value});
  },
  
  onEmailChange: function(event) {
    this.setState({email: event.target.value});
  },
  
  render: function() {
    
    return (
      <div className='respondent'>
        <h3>Your details please</h3>
        <form>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' className='form-input' value={this.state.name} onChange={this.onNameChange} />
                <label htmlFor='email'>Email Address:</label>
          <input type='text' id='email' className='form-input' value={this.state.email} onChange={this.onEmailChange} />
        </form>
      </div>
    );
  }
});
