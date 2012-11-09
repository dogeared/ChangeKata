var Change = {}
module.exports = Change

// seventh pass - 
//   I can handle all the 1, 5, 10 and 25 situations.
//   But it's ugly.
var getDenom = function(amount) {
  var denom = 1;
  [25, 10, 5].some(function(moolah) {
    if (Math.floor(amount/moolah)) {
      denom = moolah
      return true
    } else
      return false
  })
  return denom
}

Change.makeChange = function(amount, change) {
  if (amount <= 0) return change
  var denom = getDenom(amount)
  change.push(denom)
  return Change.makeChange(amount-denom, change)
}
