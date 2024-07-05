const validateEmail = require('./validate-email')

const result1 = validateEmail('princess@gmail.com')
const result2 = validateEmail ('princessgmailcom')

console.log(result1)
console.log(result2)