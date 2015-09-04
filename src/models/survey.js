/* Survey - Collection of Questions - survey.js
 * 01/07/2015
 * Author: Matthew Moss
 */
'use strict';
var Collection = require('ampersand-collection');
var Question = require('./question');
var debounce = require('debounce');
var STORAGE_KEY = 'survey-questions';
// A survey - A collection of Question models
// A collection of models - a storage space - think of as an observable array
// of models 'ampersand-rest-collection' includes RESTful methods
module.exports = Collection.extend({
  mainIndex: 'questionNumber',
  
  model: Question,
  
  // have this collection watch itself & persist to local storage when anything changes - nice & simple (from todomvc as well):
  initialize: function() {
    

    // see what's already there
    this.readFromLocalStorage();
    
    // put a debounce on- postpones execution for specified milliseconds
    this.saveToLocalStorage = debounce(this.saveToLocalStorage, 100);
    
    //listen for changes to the collection & save when it does
    // Observer pattern
    this.on('all', this.saveToLocalStorage, this);
  },
  
  
  
  // from ampersand todomvc*********************
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

