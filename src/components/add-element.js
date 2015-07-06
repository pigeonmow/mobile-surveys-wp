var React = require('react');

module.exports = React.createClass({
  displayName: 'AddElement',
  
  render: function () {
  
    return (
      <div className='grid-flex-cell'>
        <h1>Add elements</h1>
          <p>e.g. progress bar, breadcrumbs, image etc</p>
      </div>
    );
  
  }
});