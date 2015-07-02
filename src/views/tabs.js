var React = require('react');
var AddQuestion = require('../components/add-question');
var EditQuestion = require('../components/edit-question');
var AddElement = require('../components/add-element');
var Tabs = require('../components/tab-list');

var tabList = [
    {
        'name': 'Add Question',
        'url': '/create/add-question',
        'content':
            <div className='add-question'>
            	<AddQuestion />
            </div>
    },
    {
        'name': 'Edit Question',
        'url': '/create/edit-question',
        'content':
            <div className='edit-question'>
            	<EditQuestion />
            </div>
    },
    {
        'name': 'Add Element',
        'url': '/create/add-element',
        'content':
       		<div className='add-element'>
            	<AddElement />
            </div>
    }
];

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
      <div className='container'>
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