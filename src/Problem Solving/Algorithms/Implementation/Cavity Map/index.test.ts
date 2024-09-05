import { cavityMap } from '@ProblemSolving/Algorithms/Implementation';

test('should return the number of chocolates Bobby can eat', () => {
    expect(cavityMap(['1112', '1912', '1892', '1234'])).toEqual([
        '1112',
        '1X12',
        '18X2',
        '1234',
    ]);
});
