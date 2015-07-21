// Preview Survey View - src/components/survey-view.js
var React = require('react');
var User = require('../components/user');
var Title = require('../components/title');
var Instructions = require('../components/instructions');
var QuestionSlider = require('../components/question-slider');
var ampersandMixin = require('ampersand-react-mixin');
// emit change events here - top level component which is stateful & goes
// down the tree
// so this is kinda like the controller...
module.exports = React.createClass({
  displayName: 'PreviewPage',
  mixins: [ampersandMixin],
  
    getInitialState: function () {
    return {
      value: 'multi'
    }
  },
// deal with changing selection
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  //Add question button handler
  onAddClick: function(event) {
    alert('Adding...');
    
  },
   
  render: function () {
  
    return (
      <div className='grid-flex-cell' id='preview-survey'>

          <User survey={this.props.survey} />
          <Title survey={this.props.survey} />
          <Instructions survey={this.props.survey} />
          <QuestionSlider question={this.props.question} />

        <form>
          <label htmlFor='select'>
            New Question
          <select name='new-question' value={this.state.value}
            onChange={this.handleChange}>
            <option value='multi'>Multiple Choice</option>
            <option value='drop'>Drop Down</option>
            <option value='text'>Text Box</option>
          </select>
          </label>
          <button type='button' onClick={this.onAddClick}>
            Add
          </button>
        </form>
      
                <span className='pull-right'>
            <button type='button'>
              Save Survey
            </button>
          </span>
          <span className='pull-right'>
            <button type='button'>
              Reset Survey
            </button>
          </span>
          <span className='pull-right'>
            <button type='button'>
              Publish Survey
            </button>
          </span>
      </div>
    );
  }
});
