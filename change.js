var Change = {}
module.exports = Change

// ninth pass - JP's solution
//   I can handle all the 1, 5, 10 and 25 situations.
//   This is more compact, but less readable.
var changer = function(amount, change, preferred) {
  if (amount <= 0) 
    return change
  else if (Math.floor(amount/preferred[0])) {
    change.push(preferred[0])
    return changer(amount-preferred[0], change, preferred)
  } else {
    preferred.shift()
    return changer(amount, change, preferred)
  }
}


Change.makeChange = function(amount, change) {
  return changer(amount, change, [25, 10, 5, 1]) 
}
