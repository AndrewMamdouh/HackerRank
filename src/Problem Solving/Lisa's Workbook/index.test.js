const workbook = require('.');

test('should return the number of special problems in the workbook', () => {
    expect(workbook(5, 3, [4, 2, 6, 1, 10])).toBe(4);
});