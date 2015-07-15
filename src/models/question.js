// observable model - any property defined has a getter & setter
// Different from Backbone model in following ways:
// backbone - don't have to define properties initially
// with ampersand - anything want to persist as a model - have to define as a property - why? - human readability
// props: come from server & persist back to server - eg id, avatar_url
// session: stuff to keep around in browser - eg a user token
// derived: 
var Model = require('ampersand-model');
var syncFactory = require('ampersand-sync-localstorage');
// amp-sync-ls allows us to put sync instead of url
module.exports = Model.extend({
  sync: syncFactory('multi-choice'),
  
  initialize: function() {
    // this.id = 0
    this.questionType = 'Multiple Choice'
    this.query = 'Enter question here'
    this.info = 'Enter question information'
    this.choice = 'Enter answer choice'
    this.choices = []
  },
  
  props: {
    id: 'number',
    questionType: 'string',
    query: 'string',
    info: 'string',
    choice: 'string',
    choices: 'array'
  },
  
  session: {
        
/*    editChoice: {
      type: 'boolean',
      default: true
    },*/
    
    editQuery: {
      type: 'boolean',
      default: true
    },
    
    editInfo: {
      type: 'boolean',
      default: true
    }
  }
  
});
