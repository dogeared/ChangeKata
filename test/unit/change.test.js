/**
 * Module dependencies.
 */

var expect = require('expect.js')
var _ = require('underscore')
var Change = require('../../change.js')

/**
  * test - models - structure
  */

// fourth pass - JP rearchitects test
//   Test is much more readable.
//   Also, can easily add more tests now.
describe('make change 4', function() {
  var tests = [
    { input: 0,  expected: [] },
    { input: 1,  expected: [1] },
    { input: 2,  expected: [1, 1] },
    { input: 3,  expected: [1, 1, 1] },
    { input: 4,  expected: [1, 1, 1, 1] },
  ]

  _.each(tests, function(test) {
    it(test.input, function() {
      expect(Change.makeChange(test.input, [])).to.eql(test.expected)
    })
  })
})
