var Change = {}
module.exports = Change

// tenth - Micah's again. I like it better.
//   I can handle all the 1, 5, 10 and 25 situations.
//   This is my favorite solution for readability and
//   compactness. Simple "for" loop trumps fancy array
//   manipulation.
var getDenom = function(amount, types) {
  for (var i = 0; i < types.length; i++) {
    if (Math.floor(amount/types[i])) return types[i]
  }
}

Change.makeChange = function(amount, change) {
  if (amount <= 0) return change
  var denom = getDenom(amount, [25, 10, 5, 1])
  return Change.makeChange(amount-denom, change.concat(denom))
}
