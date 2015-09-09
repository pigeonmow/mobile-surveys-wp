'use strict';
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var MainView = require('../main-view.js');

describe('MainView', function() {
  it('renders', function() {
   var element = TestUtils.renderIntoDocument(<MainView />);
   expect(element).toBeTruthy();
  });
});
