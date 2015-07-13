// User name field
var React = require('react');

module.exports = React.createClass({
  displayName: 'User',
  
  render: function() {
    
    return (
      
              <div className='user'>
          <span>{this.props.username}</span>
          <span>          
            <button type='button' className='button button-outlined button-small' onClick={this.onEditClick}>
                  Edit
            </button>
          </span>
        </div>
      
    );
  }
});