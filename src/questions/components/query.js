var React = require('react');
// mixin needed???...**************

module.exports = React.createClass({
  displayName: 'Query',
  
       // edit method
  onEditClick: function(event) {
    event.preventDefault();
    // alert('click edit you did!');
    this.props.question.editQuery = true;
  },
  
    // cancel method
  onCancelClick: function(event) {
    event.preventDefault();
    this.props.question.editQuery = false;
    this.setState(this.getInitialState());
  },
  
  // onSubmit method - or this could be onClick instead???
  onSubmit: function(event) {
    event.preventDefault();
    this.props.question.save(this.state);
    this.props.question.editQuery = false;
  },
  
  getInitialState: function() {
    return {
      query: this.props.question.query
    }
  },
  // handlers
  onQueryChange: function(event) {
    this.setState({
      query: event.target.value
    })
  },
  
  render: function() {
    var content;
    
    if (this.props.question.editQuery === true) {
      content = (
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <input type='text' name='query' value={this.state.query} onChange={this.onQueryChange} />
            <button type='submit'>
              Save
            </button>
            <button onClick={this.onCancelClick} type='button'>
              Cancel
            </button>
          </fieldset>
        </form>
      );
    } else {
      content = (
        <div>
          <span>{this.props.question.query}</span>
          <span>
            <button onClick={this.onEditClick} type='button'>
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