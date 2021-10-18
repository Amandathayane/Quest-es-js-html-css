function createCheckDigit (membershipId) {
  let sum = 0
  let resto = 0
  while (membershipId) {
    sum += membershipId % 10
    membershipId = Math.floor(membershipId / 10)
    resto = (sum - 1) % 9 + 1
  }

  return resto
}

console.log(createCheckDigit('55555'))
