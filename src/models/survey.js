/* Survey Model - survey.js
 * 01/07/2015
 * Author: Matthew Moss
 */
// A survey - the model where a complete survey saves...?
// also currently a model for the preview...
'use strict';
var Model = require('ampersand-model');
var syncFactory = require('ampersand-sync-localstorage');
var QuestionCollection = require('./question-collection');
module.exports = Model.extend({
  sync: syncFactory('survey'),
  // init runs once when new instance instantiated
  initialize: function() {
    this.username = ''
    this.title = ''
    this.instructions = ''
  },
  // stuff expected from server & to persist back to server
  // the model then creates a getter & setter for each prop &
  // they are observable - model broadcasts events
  props: {
   // username: 'string', // moved this to the user model
    title: 'string',
    instructions: 'string'
  },
  // session stays local to browser - not saved when calling model.save method
  session: {

    editQuery: {
      type: 'boolean',
      default: true
    },

    editInfo: {
      type: 'boolean',
      default: true
    },

/*    editUser: {
      type: 'boolean',
      default: true
    },*/ // relocated to user model

    editTitle: {
      type: 'boolean',
      default: true
    },

    editInstructions: {
      type: 'boolean',
      default: true
    }

  },
  // instantiating new question collection for this survey
  // this collection will always be created when the model is created
  collections: {
    questions: QuestionCollection
  }

});

