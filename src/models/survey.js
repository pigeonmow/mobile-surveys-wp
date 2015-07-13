// A survey - the model where a complete survey saves...?
// also currently a model for the preview...
var Model = require('ampersand-model');
// observable model - any property defined has a getter & setter
// Different from Backbone model in following ways:
// backbone - don't have to define properties initially
// with ampersand - anything want to persist as a model - have to define as a property - why? - human readability
// props: come from server & persist back to server - eg id, avatar_url
// session: stuff to keep around in browser - eg a user token
// derived: 
module.exports = Model.extend({
  
  // init runs once when new instance instantiated
  initialize: function() {
    this.id = 1
    this.username = 'Your user name'
    this.title = 'Enter a survey title'
  },
  
  // stuff expected from server & to persist back to server
  // the model then creates a getter & setter for each prop & 
  // they are observable - model broadcasts events
  props: {
    id: 'number',
    username: 'string',
    title: 'string'
  },
  
    // session stays local to browser - not saved when calling model.save method
  session: {
    
    editing: {
      type: 'boolean',
      default: false
    }
    
  }
  
});
