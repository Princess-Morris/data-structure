function fizzBuzzArray(num){

    const arr = []

    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0){
            arr.push('fizzBuzz')
        } else if(
          i % 5 === 0
        ){ arr.push('buzz')

        } else if(
            i % 3 === 0
        ){
            arr.push('fizz')
        } else(
            arr.push(i)
        )
    }

    return arr
}

module.exports = fizzBuzzArray