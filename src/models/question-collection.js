/* Question Collection - question-collection.js
 * 01/07/2015
 * Author: Matthew Moss
 */
// A collection of models - a storage space - think of as an observable array
// of models 'ampersand-rest-collection' includes RESTful methods
'use strict';
var Collection = require('ampersand-rest-collection');
var syncFactory = require('ampersand-sync-localstorage');
var Question = require('./question');

module.exports = Collection.extend({
  sync: syncFactory('question-collection'),
  mainIndex: 'Q_id',

  model: Question,
  
  initialize: function() {
    // dummy & blank questions for startup -  adds 1 entry to each survey created in survey-collection on start up
    this.add([
      {
        Q_id: 1,
        query: '',
        info: '',
        choices: []
      }
    ])
  }

});
