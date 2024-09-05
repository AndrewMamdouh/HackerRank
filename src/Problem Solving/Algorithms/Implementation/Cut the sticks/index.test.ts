import { cutTheSticks } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Cut the sticks', () => {
    it('should return the number of sticks that are left before each iteration', () => {
        expect(cutTheSticks([5, 4, 4, 2, 2, 8])).toEqual([6, 4, 2, 1]);
    });
});
