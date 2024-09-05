import { minimumDistances } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Minimum Distances', () => {
    it('should return the minimum distance between any pair of equal elements in the array', () => {
        expect(minimumDistances([7, 1, 3, 4, 1, 7])).toBe(3);
    });
});
