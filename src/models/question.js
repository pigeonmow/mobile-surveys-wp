/* Question Model - question.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var State = require('ampersand-state');
// observable model - any property defined has a getter & setter
// Different from Backbone model in following ways:
// backbone - don't have to define properties initially
// with ampersand - anything want to persist as a model - have to define as a
// property - why? - human readability
// props: come from server & persist back to server - eg id, avatar_url
// session: stuff to keep around in browser - eg a user token
// derived:
module.exports = State.extend({
  
  props: {
    questionNumber: {
      type: 'number',
      // closure- module pattern to auto increment the mainIndex: questionNumber property
      default: (function() {
        var myNumber = 0;
        
        return function() {
          myNumber += 1;
          
          return myNumber;
        }
      }())
    },
    query: ['string', true, ''],
    info: ['string', false, ''],
   	//choice: ['string',true, ''], 
    choices: {
      type: 'array',
      default: function() { return []; }
    }
  },
  
  // unsure if needed - relocated to user model...
/*  session: {

    editQuery: {
      type: 'boolean',
      default: true
    },

    editInfo: {
      type: 'boolean',
      default: true
    }
  },*/
  
/*  derived: {
    currentQuestion: {
      deps: ['questionNumber'],
      fn: function() {
        return survey.get(this.currentQuestion);
      }
    }
  }*/
    
});