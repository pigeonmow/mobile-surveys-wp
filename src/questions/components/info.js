var React = require('react');
// mixin needed???...**************

module.exports = React.createClass({
  displayName: 'Info',
  
       // edit method
  onEditClick: function(event) {
    event.preventDefault();
    // alert('click edit you did!');
    this.props.question.editInfo = true;
  },
  
    // cancel method
  onCancelClick: function(event) {
    event.preventDefault();
    this.props.question.editInfo = false;
    this.setState(this.getInitialState());
  },
  
  // onSubmit method - or this could be onClick instead???
  onSubmit: function(event) {
    event.preventDefault();
    this.props.question.save(this.state);
    this.props.question.editInfo = false;
  },
  
  getInitialState: function() {
    return {
      info: this.props.question.info
    }
  },
  // handlers
  onInfoChange: function(event) {
    this.setState({
      info: event.target.value
    })
  },
      
  
  render: function() {
    var content;
    
    if (this.props.question.editInfo === true) {
      content = (
        <form onSubmit={this.onSubmit}>
         <fieldset>
            <textarea name='info' value={this.state.info} onChange={this.onInfoChange} className='form-input'/>
            <button type='submit' className='button button-outlined button-small'>
              Save
            </button>
            <button onClick={this.onCancelClick} type='button' className='button button-outlined button-small'>
              Cancel
            </button>
          </fieldset>

        </form>
      );
    } else {
      content = (
        <div>
          <span>{this.props.question.info}</span>
          <span>
            <button onClick={this.onEditClick} type='button' className='button button-outlined button-small'>
              Edit
            </button>
          </span>
        </div>
      );
    }
    
    return (
      <div>
        {content}
      </div>
    );
  }
});