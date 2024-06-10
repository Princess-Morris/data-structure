const arrayIntersection = require('./array-intersection')

test('checking to see common values of two arrarys', () => {
    expect(arrayIntersection([1,2,3,3,5], [1,2,3])).toEqual([1,2,3])
})