import { divisibleSumPairs } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Divisible Sum Pairs', () => {
    it('should return the number of pairs', () => {
        expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
    });
});
