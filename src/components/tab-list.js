var React = require('react');
var Tab = require('../components/tab-item');

module.exports = React.createClass({
    // function takes a 'tab' parameter 
    handleClick: function(tab){
    	this.props.changeTab(tab);
    },
    
    render: function(){
        return (
            <nav>
                <ul className='list-unstyled list-inline tabs'>
                {this.props.tabList.map(function(tab, index) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, index)}
                            key={tab.id}
                            url={tab.url}
                            name={tab.name}
                            isCurrent={(this.props.currentTab === index)}
                         />
                    );
                }.bind(this))}
                </ul>
            </nav>
        );
    }  
});