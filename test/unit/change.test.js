/**
 * Module dependencies.
 */

var expect = require('expect.js')
var _ = require('underscore')
var Change = require('../../change.js')

/**
  * test - models - structure
  */

// first pass
describe('make change', function() {
  it('0', function() {
    expect(Change.makeChange(0)).to.eql([])
  })
})
