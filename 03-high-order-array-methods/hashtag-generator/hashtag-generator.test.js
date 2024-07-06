const generateHastag = require('./hashtag-generator')

test('Generating Hashtags', () => {
    expect(generateHastag('Hello there thanks for trying my Kata')).toBe(
        '#HelloThereThanksForTryingMyKata'
    )
    expect(generateHastag('     Hello     World   ')).toBe('#HelloWorld')
    expect(generateHastag('')).toBe(false)
    expect(generateHastag('This is a  very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very veryvery  very very very very very very very long input that should result in a false hastag because it excedds the character limit of 140')).toBe(false)
})