var React = require('react');
var AddQuestion = require('../components/question-add');
var EditQuestion = require('../components/question-edit');
var AddElement = require('../components/element-add');
var Tabs = require('../components/tab-list');
var AddThankyou = require('../components/thanks-add');
var AddLogic = require('../components/logic-add');

// ***************Refactor this tabList out as a model*************
// or at least relocate it into tab-list.....
var tabList = [
    {
        'id' : '1',
        'name': 'Add Question',
        'url': '/create/add-question',
        'content':
            <div className='add-question'>
            	<AddQuestion />
            </div>
    },
    {
        'id' : '2',
        'name': 'Edit Question',
        'url': '/create/edit-question',
        'content':
            <div className='edit-question'>
            	<EditQuestion />
            </div>
    },
    {
        'id' : '3',
        'name': 'Add Element',
        'url': '/create/add-element',
        'content':
       		<div className='add-element'>
            	<AddElement />
            </div>
    },
    {
        'id' : '4',
        'name': 'Add Thank You',
        'url': '/create/add-thankyou',
        'content':
            <div className='add-thankyou'>
                <AddThankyou />
            </div>
    },
    {
        'id' : '5',
        'name': 'Add Logic',
        'url': '/create/add-logic',
        'content':
       		<div className='add-logic'>
            	<AddLogic />
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