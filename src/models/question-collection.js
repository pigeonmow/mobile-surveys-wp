var Collection = require('ampersand-rest-collection');
// A collection of models - a storage space - an observable array of models
// 'ampersand-rest-collection' includes RESTful methods
var Question = require('./question');

module.exports = Collection.extend({
  url: '',
  
  model: Question
})