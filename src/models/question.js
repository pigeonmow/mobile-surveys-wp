var Model = require('ampersand-model');
// observable model - any property defined has a getter & setter
// Different from Backbone model in following ways:
// backbone - don't have to define properties initially
// with ampersand - anything want to persist as a model - have to define as a property - why? - human readability
// props: come from server & persist back to server - eg id, avatar_url
// session: stuff to keep around in browser - eg a user token

module.exports = Model.extend({
  props: {
    id: 'string',
    questionType: 'string'
  },
  
  session: {
    
  },
  
  derived: {
    
  }
  
});