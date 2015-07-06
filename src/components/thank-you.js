// Thank you React component - src/components/thank-you.js
// sub view of src/views/preview.js
// 
var React = require('react');

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'ThankYou',
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
      <div className='thank-you'>

        <h2>Thanks</h2>
        <p>make sure to thank your respondents</p>
  
      </div>
    );
  }
});