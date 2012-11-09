/**
 * Module dependencies.
 */

var expect = require('expect.js')
var _ = require('underscore')
var Change = require('../../change.js')

/**
  * test - models - structure
  */

// third pass
describe('make change 3', function() {
  it('0', function(done) {
    expect(Change.makeChange(0,[])).to.eql([])
    done()
  })

  it('1', function(done) {
    expect(Change.makeChange(1,[])).to.eql([1])
    done()
  })

  it('2', function(done) {
    expect(Change.makeChange(2,[])).to.eql([1, 1])
    done()
  })
})
