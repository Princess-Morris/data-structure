const fizzBuzzArray = require('./fizzbuzz-array')

test('FizzBuzz Array', () => {
    expect(fizzBuzzArray(5)).toEqual([1, 2, 'fizz', 4, 'buzz'])
})