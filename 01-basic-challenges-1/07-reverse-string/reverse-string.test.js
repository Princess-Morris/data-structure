const reverseString = require('./reverse-string')

test('Reversing a given string and converting the string to loweCase', () => {
    expect(reverseString('girl')).toBe('lrig')
    // expect(reverseString(Boy)).toBe('yob')
    // expect(reverseString('aNt')).toBe('tna')
})