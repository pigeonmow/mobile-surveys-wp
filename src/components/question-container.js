// Question container React component - src/components/question-container.js
// sub view of src/views/preview.js
// 
var React = require('react');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'QuestionContainer',
  // set the initially selected option displayed when view rendered  
 getInitialState: function () {
     return {
    
    };
  },

// methods to deal with changing each form field
//    onInstructionsChange: function(event) {
//    this.setState({
//      instructions: event.target.instructions
//    });
//  },
  
  render: function () {
    return (
      <div className='question-container'>
      
        <h2>Question</h2>
        <p>Questions render here as added - will have back/forward buttons</p>
      
      </div>
    );
  }
});