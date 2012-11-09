var Change = {}
module.exports = Change

// sixth pass - I can handle the 1, 5 and 10 situations; 1 - 24.
var getDenom = function(amount) {
  if (Math.floor(amount/10))     return 10
  else if (Math.floor(amount/5)) return 5
  else                           return 1
}

Change.makeChange = function(amount, change) {
  if (amount <= 0) return change
  var denom = getDenom(amount)
  change.push(denom)
  return Change.makeChange(amount-denom, change)
}
