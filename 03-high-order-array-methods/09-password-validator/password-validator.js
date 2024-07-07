function validatePassword(password){
    const isLengthValid = password.length >= 8

    const hasUpperCase = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase())

    const hasLowerCase = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase())

    const hasDigit = password.split('').some((char) => !isNaN(parseInt(char, 10)))


    return isLengthValid && hasUpperCase && hasLowerCase && hasDigit
}

module.exports = validatePassword







 
// function isLengthValid(password){
//    if(!password.length >= 8){
//     return false
//    }
//    return true
// }

// function hasUpperCase(password){
//     if(!isLengthValid(password)){
//         return false
//     }

//     return password.split('').some((char) => char === char.toUpperCase() && char !== char.toLowerCase())
    
// }

// function hasLowerCase(password){
//     if(!hasUpperCase(password)){
//         return false
//     }

//     return password.split('').some((char) => char === char.toLowerCase() && char !== char.toUpperCase())
    

// }

// function hasDigit(password){
//   if(!hasLowerCase(password)){
//     return false
//   }

//   return password.split('').some((char) => !isNaN(parseInt(char, 10)))
// }


