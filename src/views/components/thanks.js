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
      <div>
        <h2>Thank you!</h2>
          <button type='button'>Submit Your Answers</button>
      </div>
    );
  }
});
