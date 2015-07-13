// Preview Survey View - src/components/survey-view.js
var React = require('react');
var User = require('../components/user');
var ampersandMixin = require('ampersand-react-mixin');


module.exports = React.createClass({
  displayName: 'PreviewPage',
  mixins: [ampersandMixin],
  
  getInitialState: function() {
    // this is here so stateful component is at top of tree

    return {
      // this really should be accessed via this.props
     username: 'me'
    }
  }, 
  
  render: function () {
    
    return (
      <div className='grid-flex-cell' id='preview-survey'>
          <User survey={app.survey} />      
      </div>
    );
  }
});
