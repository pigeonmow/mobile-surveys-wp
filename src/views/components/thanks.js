/* Thanks React Component - thanks.js
 * 07/08/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
//
module.exports = React.createClass({
  displayName: 'Thanks',
  
  render: function() {
    
    return (
      <div className='thanks'>
        <h2>Thank you!</h2>
          <p>We appreciate you taking the time to complete this 
      questionnaire&#8212;your answers help us immensely.</p>
          <button type='button'>Submit Your Answers</button>
      </div>
    );
  }
});
