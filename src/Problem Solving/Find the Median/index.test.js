const findMedian = require('.');

test('should return the median of the array', () => {
    expect(findMedian([0, 1, 2, 4, 6, 5, 3])).toBe(3);
});