// Create Survey View - src/views/create.js
var React = require('react');
//var AddQuestion = require('../components/add-question');
// React - nice to have html5 in here to see in context - trade off seperation
// of concerns - is it seperate?? View - describes DOM interaction & stuff...


// ownees of this component
var TabsView = require('./tabs');
var Preview = require('../components/preview');


// **************REFACTOR********************************************
//var tabList = require('');
// ************this needs refactoring out - here temporarily*****************
// 
// Also routes defined here need to move to router - currently broken usability

// **************!!!!!!REFACTOR***************REFACTOR!!!!****************

// Poss gd idea to refactor this as a tab view also, which will render in 
// create.js - maybe then preview could be pulled out to go next to the 
// tabbed view... so create view would have a 'start creating' button to kick
// off preview which would contain title, instructions and questions fields 
// ready to be added to as per the question model...
// ...or perhaps these 2 components - create & preview should just render 
// directly into main view - less complexity... but do need to make it so
// no tabs content visible in create view until a tab clicked
module.exports = React.createClass({
  //name to show in React devtools extension
  displayName: 'CreatePage',
  
  render: function () {
    return (
            <div className='grid-flex-container'>

          <TabsView />
          <Preview />
      </div>
    )
  }

});