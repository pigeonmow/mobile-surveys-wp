var React = require('react');

  // create a controlled input form with:
module.exports = React.createClass({
  displayName: 'MultiChoice',
      
  render: function () {
    // query text field - initially empty
    // instructions text field - initially empty
    // initially - 2 radio inputs & corresponding labels which have editable
    // placeholder text
    // need to deal with value & checked props below -------
    return (
      <div className='multi-question'>
        <form action='' method='' id=''>
          <input type='text' name='query' value='Enter question here' />
          <textarea name='instructions' value='Enter instructions' />
          <input type='radio' name='' value='' checked='checked' />
          <input type='radio' name='' value='' />
        </form>
      </div>
    );
  }
});

    // id prop
    
    // question type prop
    
    // render this form into <div> in preview.js ready for user to edit