const getSum = require('./get-sum')

test('Calculating the sum of two numbers', () => {
    // Test case inputs
    const num1 = 5
    const num2 = 7

    // call the function
    const result = getSum(num1, num2)

    // check if the result is eual to the expected sum
    expect(result).toBe(12)
})