import { findMedian } from '@ProblemSolving/Algorithms/Sorting';

describe('Problem Solving » Algorithms » Sorting » Find the Median', () => {
    it('should return the median of the array', () => {
        expect(findMedian([0, 1, 2, 4, 6, 5, 3])).toBe(3);
    });
});
