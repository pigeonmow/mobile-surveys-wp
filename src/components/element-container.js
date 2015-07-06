// Element container React component - src/components/element-container.js
// sub view of src/views/preview.js
// 
var React = require('react');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'ElementContainer',
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
      <div className='element-container'>

        <h2>Elements</h2>
        <p>Any elements added render here - e.g. progress bar</p>
  
      </div>
    );
  }
});