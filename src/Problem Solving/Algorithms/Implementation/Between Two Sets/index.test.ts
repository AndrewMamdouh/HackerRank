import { getTotalX } from '@ProblemSolving/Algorithms/Implementation';

test('should return the number of integers that are between the sets', () => {
    expect(getTotalX([2, 4], [16, 32, 96])).toBe(3);
});
