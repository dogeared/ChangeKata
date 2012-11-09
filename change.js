var Change = {}
module.exports = Change

// fifth pass - I can handle the 1 and 5 situations; 1 - 9.
Change.makeChange = function(amount, change) {
  if (amount <= 0) return change
  var fivers = Math.floor(amount/5)
  change.push((fivers)?5:1)
  return Change.makeChange((fivers)?amount-5:amount-1, change)
}
