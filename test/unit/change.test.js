/**
 * Module dependencies.
 */

var expect = require('expect.js')
var _ = require('underscore')
var Change = require('../../change.js')

/**
  * test - models - structure
  */

// seventh through tenth passes - full suite of change possibilities
var tests = [
  { input: 0,  expected: [] },
  { input: 1,  expected: [1] },
  { input: 2,  expected: [1, 1] },
  { input: 3,  expected: [1, 1, 1] },
  { input: 4,  expected: [1, 1, 1, 1] },
  { input: 5,  expected: [5] },
  { input: 6,  expected: [5, 1] },
  { input: 9,  expected: [5, 1, 1, 1, 1] },
  { input: 10, expected: [10] },
  { input: 11, expected: [10, 1] },
  { input: 15, expected: [10, 5] },
  { input: 16, expected: [10, 5, 1] },
  { input: 19, expected: [10, 5, 1, 1, 1, 1] },
  { input: 20, expected: [10, 10] },
  { input: 24, expected: [10, 10, 1, 1, 1, 1] },
  { input: 25, expected: [25] },
  { input: 26, expected: [25, 1] },
  { input: 30, expected: [25, 5] },
  { input: 31, expected: [25, 5, 1] },
  { input: 35, expected: [25, 10] },
  { input: 40, expected: [25, 10, 5] },
  { input: 41, expected: [25, 10, 5, 1] },
  { input: 91, expected: [25, 25, 25, 10, 5, 1] },
  { input: 99, expected: [25, 25, 25, 10, 10, 1, 1, 1, 1] },
  { input: 100, expected: [25, 25, 25, 25] }
]

describe('make change 8', function() {
  _.each(tests, function(test) {
    it(test.input, function() {
      expect(Change.makeChange(test.input, [])).to.eql(test.expected)
    })
  })
})
