var React = require('react');
var Tabs = require('../components/tab-list');
var tabList = require('../models/tab-list');


module.exports = React.createClass({
  displayName: 'TabsView',
  
    
  getInitialState: function () {
    return {
      tabList: tabList,
      currentTab: 0
    };
  },
  
  changeTab: function (index) {
    this.setState({ currentTab: index });
  },
  
  // this is the tab container
  render: function () {
    return (
      <div className='grid-flex-cell grid-flex-cell-1of3'>
                <Tabs
            		currentTab={this.state.currentTab}
            		tabList={this.state.tabList}
            		changeTab={this.changeTab}
            	/>
    
            	<div className="content">
            		{this.state.tabList[this.state.currentTab].content}
            	</div>
      </div>
    );
  }
});