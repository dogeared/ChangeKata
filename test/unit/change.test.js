/**
 * Module dependencies.
 */

var expect = require('expect.js')
var _ = require('underscore')
var Change = require('../../change.js')

/**
  * test - models - structure
  */

// fifth pass
describe('make change 5', function() {
  var tests = [
    { input: 0,  expected: [] },
    { input: 1,  expected: [1] },
    { input: 2,  expected: [1, 1] },
    { input: 3,  expected: [1, 1, 1] },
    { input: 4,  expected: [1, 1, 1, 1] },
    { input: 5,  expected: [5] },
    { input: 6,  expected: [5, 1] },
    { input: 9,  expected: [5, 1, 1, 1, 1] },
  ]

  _.each(tests, function(test) {
    it(test.input, function() {
      expect(Change.makeChange(test.input, [])).to.eql(test.expected)
    })
  })
})
