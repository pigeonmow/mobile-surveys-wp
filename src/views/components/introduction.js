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
    console.log(this.props.user.surveyTitle)
    return (
      <div className='survey-introduction'>
        <h1>Intro Time</h1>
        {localStorage.getItem('title-data')}
        {localStorage.getItem('instructions-data')}
    
        {this.props.user.get('surveyTitle')}
        {this.props.user.get('instructions')}
      </div>
    );
  }
});
