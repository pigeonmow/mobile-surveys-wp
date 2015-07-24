/* User Model - user.js
 * 21/07/2015
 * Author: Matthew Moss
 */
'use strict';
var Model = require('ampersand-model');
var Survey = require('./survey');
var syncFactory = require('ampersand-sync-localstorage');

module.exports = Model.extend({
  sync: syncFactory('user'),
  
  initialize: function() {
    this.survey = new Survey();
  },

  props: {
    userName: 'string'
  },
  
  session: {
    editUser: {
      type: 'boolean',
      default: true
    }
  },

/*  collections: {
    surveys: SurveyCollection
  }*/
});
