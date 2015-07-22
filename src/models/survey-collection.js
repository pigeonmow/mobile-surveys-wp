/* Survey Collection - survey-collection.js
 * 21/07/2015
 * Author: Matthew Moss
 */
// A collection of models - a storage space - think of as an observable array
// of models 'ampersand-rest-collection' includes RESTful methods
'use strict';
var Collection = require('ampersand-rest-collection');
var syncFactory = require('ampersand-sync-localstorage');
var Survey = require('./survey');

module.exports = Collection.extend({
  sync: syncFactory('survey-collection'),

  model: Survey,

  initialize: function() {
    // create new blank survey
    //this.survey = new Survey();
    // debugging purposes
    
    //create a few dummy surveys - it adds them but doesn't save them to
    // localstorage though
    this.add([
      {
        username: 'Matt',
        title: 'Favourite Star Wars Characters Survey',
        instructions: 'Please answer all questions as honestly as possible'
      },
      {
        username: 'C3PO',
        title: 'Binary Vaporators Quiz',
        instructions: 'Test your knowledge of Tattooine Binary Vaporators ' +
          'programming language'
      }
    ]);
  }
});
