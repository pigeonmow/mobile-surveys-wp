/* User Model - user.js
 * 21/07/2015
 * Author: Matthew Moss
 */
'use strict';
var State = require('ampersand-state');
var Survey = require('./survey');
var STORAGE_KEY = 'survey-data';
// essentially app state...
module.exports = State.extend({
    // stuff expected from server & to persist back to server
  // the model then creates a getter & setter for each prop &
  // they are observable - model broadcasts events
  props: {
    userName: ['string', true, ''],
    surveyTitle: ['string', true, ''],
    instructions: ['string', true, '']
  },
  
  session: {
    editUserName: {
      type: 'boolean',
      default: true
    },
    
    editSurveyTitle: {
      type: 'boolean',
      default: true
    },
    
    editInstructions: {
      type: 'boolean',
      default: true
    }
  },
  
  collections: {
    survey: Survey
  },
  
    // from ampersand todomvc
  // this saves ALL props above AND survey collection to local storage with the key defined: survey-data
  // possible soln: pass 'this.props' as argument into 'stringify()' method...?
  saveToLocalStorage: function() {
    localStorage[STORAGE_KEY] = JSON.stringify(this);
  },
  
  readFromLocalStorage: function() {
    var existingData = localStorage[STORAGE_KEY];
    
    if (existingData) {
      this.set(JSON.parse(existingData));
    }
  }
  
});
