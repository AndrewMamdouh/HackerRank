import { pickingNumbers } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Picking Numbers', () => {
    it('should return the length of the longest subarray', () => {
        expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toBe(3);
    });
});
