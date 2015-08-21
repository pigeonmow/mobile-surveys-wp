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
        <h1>{localStorage.getItem('title-data')}</h1>
        <h3>About this Survey</h3>
        <p>{localStorage.getItem('instructions-data')}</p>   
        {this.props.user.get('surveyTitle')}
        {this.props.user.get('instructions')}
      </div>
    );
  }
});
