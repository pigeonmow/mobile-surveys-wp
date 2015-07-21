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

        <form  onSubmit={this.onSubmit}>
          <fieldset>
            <input type='text' value={this.state.title} onChange={this.onTitleChange} name='user' />
            <button type='submit'>
                    Save
            </button>
            <button type='button' onClick={this.onCancelClick}>
                    Cancel
            </button>
          </fieldset>
        </form>

      );
    } else {
      // display mode
      content = (
        <div className='user'>
          <span>{this.props.survey.title}</span>
          <span>          
            <button type='button' onClick={this.onEditClick}>
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