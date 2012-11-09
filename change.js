var Change = {}
module.exports = Change

// second pass - now I can do two things
Change.makeChange = function(amount) {
  return (amount <= 0) ? [] : [1]
}
