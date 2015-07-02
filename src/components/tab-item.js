var React = require('react');

module.exports = React.createClass({
  handleClick: function (event) {
    // tell browser we're handling this
    event.preventDefault();
    this.props.handleClick();
  },
  
  render: function () {
    return (
      // checking className on <li> element 
      // setting url & name for item
      <li className={this.props.isCurrent ? 'current-item' : null}>
          <a onClick={this.handleClick} href={this.props.url}>
              {this.props.name}
          </a>
      </li>
    );
  }
});