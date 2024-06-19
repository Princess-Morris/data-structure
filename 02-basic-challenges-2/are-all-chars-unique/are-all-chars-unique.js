// function areAllCharactersUnique(str){
//   const charCount = {}

//   for (let i = 0; i < str.length; i++ ){
//     const char = str[i]

//     if (charCount[char]){
//         return false
//     }

//     charCount[char] = true
//     // console.log(charCount)
//   }

//   return true
// }


function areAllCharactersUnique(str){
    const charSet = new Set()
  
    for (let i = 0; i < str.length; i++ ){
      const char = str[i]
  
      if (charSet.has(char)){
          return false
      }
  
      charSet.add(char) 
      // console.log(charCount)
    }
  
    return true
  }

module.exports = areAllCharactersUnique