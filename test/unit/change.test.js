/**
 * Module dependencies.
 */

var expect = require('expect.js')
var _ = require('underscore')
var Change = require('../../change.js')

/**
  * test - models - structure
  */

// second pass
describe('make change 2', function() {
  it('0', function() {
    expect(Change.makeChange(0)).to.eql([])
  })

  it('1', function() {
    expect(Change.makeChange(1)).to.eql([1])
  })
})
