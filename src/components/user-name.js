// User name React component - src/components/user-name.js
// sub view of src/views/preview.js
// 
var React = require('react');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'UserName',
  // set the initially selected option displayed when view rendered  
  getInitialState: function () {
    return {
      user_name: 'Enter your user name'
    };
  },

// methods to deal with changing each form field
  onUserChange: function(event) {
    this.setState({
      user_name: event.target.user_name
    });
  },

  render: function () {
    return (
      <div className='user-name'>

            <input type='text' className='form-input' name='user-name' value={this.state.user_name} onChange={this.onUserChange} />
      
            <button type='submit' className='button button-outlined button-small' onClick=''>
                Save
            </button>

      </div>
    );
  }
});

