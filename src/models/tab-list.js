var React = require('react');
var AddThankyou = require('../components/thanks-add');
var AddLogic = require('../components/logic-add');
var AddQuestion = require('../components/question-add');
var EditQuestion = require('../components/question-edit');
var AddElement = require('../components/element-add');
// in this module we define number of tabs and their content
var tabList = [
    {
        'id' : 1,
        'name': 'Add Question',
        'url': '/create/add-question',
        'content':
            <div className='add-question'>
            	<AddQuestion />
            </div>
    },
    {
        'id' : 2,
        'name': 'Edit Question',
        'url': '/create/edit-question',
        'content':
            <div className='edit-question'>
            	<EditQuestion />
            </div>
    },
    {
        'id' : 3,
        'name': 'Add Element',
        'url': '/create/add-element',
        'content':
       		<div className='add-element'>
            	<AddElement />
            </div>
    },
    {
        'id' : 4,
        'name': 'Add Thank You',
        'url': '/create/add-thankyou',
        'content':
            <div className='add-thankyou'>
                <AddThankyou />
            </div>
    },
    {
        'id' : 5,
        'name': 'Add Logic',
        'url': '/create/add-logic',
        'content':
       		<div className='add-logic'>
            	<AddLogic />
            </div>
    }
];

module.exports = tabList;