/* User Model - user.js
 * 21/07/2015
 * Author: Matthew Moss
 */
'use strict';
var Model = require('ampersand-model');
var SurveyCollection = require('./survey-collection');
var syncFactory = require('ampersand-sync-localstorage');

module.exports = Model.extend({
  sync: syncFactory('user'),

  props: {
    userName: 'string'
  },

  collections: {
    surveys: SurveyCollection
  }
});
