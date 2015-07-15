var React = require('react');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  displayName: 'Title',
  mixins: [ampersandMixin],
  
      // edit method
  onEditClick: function(event) {
    event.preventDefault();
    this.props.survey.editTitle = true;
  },

  // cancel method
  onCancelClick: function(event) {
    event.preventDefault();
    this.props.survey.editTitle = false;
    this.setState(this.getInitialState());
  },
    
  onSubmit: function(event) {
    event.preventDefault();
    this.props.survey.save(this.state);
    this.props.survey.editTitle = false;
  },
  
  getInitialState: function() {
    return {
      title: this.props.survey.title
    }
  },
  
  // onChange handler - getting the event
  onTitleChange: function(event) {
    this.setState({
      title: event.target.value
    })
  },
  
  render: function() {
    var content;
    
    // branching of render method set up - assigning to content var
    if (this.props.survey.editTitle === true) {
      // Edit mode
      content = (
        <div>
        <form  onSubmit={this.onSubmit}>
          <fieldset>
            <input type='text' value={this.state.title} onChange={this.onTitleChange} className='form-input' name='user' />
            <button type='submit' className='button button-outlined button-small'>
                    Save
            </button>
            <button type='button' className='button button-outlined button-small' onClick={this.onCancelClick}>
                    Cancel
            </button>
          </fieldset>
        </form>
        </div>
      );
    } else {
      // display mode
      content = (
        <div className='user'>
          <span>{this.props.survey.title}</span>
          <span>          
            <button type='button' className='button button-outlined button-small' onClick={this.onEditClick}>
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