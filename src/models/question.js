/**
 * Question Model - question.js
 * @module
 * @author Matthew Moss
 */
'use strict';
// observable model - any property defined has a getter & setter
// props: come from server & persist back to server.
// session: stuff to keep around in browser - eg a user token
var State = require('ampersand-state');

module.exports = State.extend({

  props: {
    questionNumber: {
      type: 'number',
      // closure- module pattern to auto increment the mainIndex.
      default: (function() {
        var myNumber = 0;

        return function() {
          myNumber += 1;
          return myNumber;
        };
      }())
    },
    query: ['string', true, ''],
    info: ['string', false, ''],
    choices: {
      type: 'array',
      default: function() { return []; }
    }
  }

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
