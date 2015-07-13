// Preview Survey View - src/components/survey-view.js
var React = require('react');
var User = require('../components/user');
var Title = require('../components/title');
var Instructions = require('../components/instructions');
var ampersandMixin = require('ampersand-react-mixin');

// emit change events here - top level component which is stateful & goes
// down the tree
// so this is kinda like the controller...
module.exports = React.createClass({
  displayName: 'PreviewPage',
  mixins: [ampersandMixin],
   
  render: function () {
  
    return (
      <div className='grid-flex-cell' id='preview-survey'>
          <User survey={this.props.survey} />
          <Title survey={this.props.survey} />
          <Instructions survey={this.props.survey} />
      </div>
    );
  }
});
