/* User Model - user.js
 * 21/07/2015
 * Author: Matthew Moss
 */
'use strict';
var State = require('ampersand-state');
var Survey = require('./survey');
var USER_STORAGE_KEY = 'user-data';
var TITLE_STORAGE_KEY = 'title-data';
var INSTRUCTIONS_STORAGE_KEY = 'instructions-data';
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
    },
    
    editQuery: {
      type: 'boolean',
      default: true
    },

    editInfo: {
      type: 'boolean',
      default: true
    }   

  },
  
  collections: {
    survey: Survey
  },
  
    // based on ampersand todomvc
  saveUserToLocalStorage: function() {
    localStorage[USER_STORAGE_KEY] = JSON.stringify(this.userName);
  },
  
  saveTitleToLocalStorage: function() {
    localStorage[TITLE_STORAGE_KEY] = JSON.stringify(this.surveyTitle);
  },
  
  saveInstructionsToLocalStorage: function() {
    localStorage[INSTRUCTIONS_STORAGE_KEY] = JSON.stringify(this.instructions);
  },
  // include this on initialization?? 
/*  readFromLocalStorage: function() {
    var existingData = localStorage[STORAGE_KEY];
    
    if (existingData) {
      this.set(JSON.parse(existingData));
    }
  }*/
  
});
