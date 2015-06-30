var React = require('react');

module.exports = React.createClass({
  displayName: 'AddQuestion',
  
  render: function () {
  
    return (
      <div className='container'>
        <form>
          <label htmlFor='radio' className='input-radio form-element'>
            <input type='radio'>
            New Question
            </input>
          </label>
          <select className='form-element'>
            <option>Multiple Choice</option>
            <option>Drop Down</option>
            <option>Text Box</option>
          </select>
          <button type='submit' className='button button-primary'>
            Add
          </button>
        </form>
      </div>
    )
  
  }
});