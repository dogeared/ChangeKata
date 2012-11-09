var Change = {}
module.exports = Change

// third & fourth pass
//   I can handle the 1 situations; 0 - 4.
//   Yay recurssion! It's third and fourth because
//   JP came up with a better test approach
Change.makeChange = function(amount, change) {
  if (amount <= 0) return change
  change.push(1)
  return Change.makeChange(amount-1, change)
}
