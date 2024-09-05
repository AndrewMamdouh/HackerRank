import { chocolateFeast } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Chocolate Feast', () => {
    it('should return the number of chocolates Bobby can eat', () => {
        expect(chocolateFeast(10, 2, 5)).toBe(6);
    });
});
