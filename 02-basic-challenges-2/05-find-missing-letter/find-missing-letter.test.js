const findMissingLetter = require('./find-missing-letter')

test('Find Missig Letter', () => {
    expect(findMissingLetter(['a', 'b', 'c', 'e'])).toBe('d')
    expect(findMissingLetter(['X', 'Z'])).toBe('Y')
    expect(findMissingLetter(['m', 'n', 'o', 'q'])).toBe('p')
    expect(findMissingLetter(['F', 'G', 'H', 'J'])).toBe('I')
})