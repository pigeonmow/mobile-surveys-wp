// Preview Survey View - src/components/preview.js
var React = require('react');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...

module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'PreviewPage',
  
  render: function () {
    return (
      <div className='container'>
        <header>
          <h2>Preview Your Survey</h2>
        </header>
      </div>
    );
  }
});
