/* Introduction React Component - introduction.js
 * 07/08/2015
 * Author: Matthew Moss
 */
'use strict';
var React = require('react');
// View component for an introduction  in final survey -
module.exports = React.createClass({
  displayName: 'Question',
  
  render: function() {
    
    return (
      <div className='survey-introduction'>
        <h1>Intro Time</h1>
      </div>
    );
  }
});
