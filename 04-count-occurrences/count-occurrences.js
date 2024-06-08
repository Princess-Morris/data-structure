// function countOccurrences(str, char){
//     let count = 0;

//     for (let i = 0; i < str.length; i++){
//         // console.log(str[i]);
//         if (str[i] === char){
//             // console.log(char)
//             count++ 
//         }
//     }
//     return count
// }

const countOccurrences = (str, char) => {
//    const chars = str.split("")
//    if(ch )

    console.log(str.split(char).length - 1) 
    return str.split(char).length - 1
}   

module.exports = countOccurrences;