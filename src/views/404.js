/**
 * Message Component - message.js
 * @module
 * @author Matthew Moss
 */
'use strict';
// 404 page
var React = require('react');

module.exports = React.createClass({
  displayName: 'MessagePage',

  render: function() {

    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
});
