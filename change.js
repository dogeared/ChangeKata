var Change = {}
module.exports = Change

// eigth pass -
//   I can handle all the 1, 5, 10 and 25 situations.
//   Still seems like there is room for improvement
//   on the getDenom function.
var getDenom = function(amount) {
  if (Math.floor(amount/25))      return 25
  else if (Math.floor(amount/10)) return 10
  else if (Math.floor(amount/5))  return 5
  else                            return 1
}

Change.makeChange = function(amount, change) {
  if (amount <= 0) return change
  var denom = getDenom(amount)
  change.push(denom)
  return Change.makeChange(amount-denom, change)
}
