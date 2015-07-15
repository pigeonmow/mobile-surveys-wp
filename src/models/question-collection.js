// A collection of models - a storage space - think of as an observable array of models
// 'ampersand-rest-collection' includes RESTful methods
var Collection = require('ampersand-rest-collection');
var syncFactory = require('ampersand-sync-localstorage');
var Question = require('./question');

module.exports = Collection.extend({
  sync: syncFactory('questions'),
  
  model: Question
  
});