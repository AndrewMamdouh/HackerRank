import { compareTriplets } from '@ProblemSolving/Algorithms/Warmup';

describe('Problem Solving » Algorithms » Warmup » Compare the Triplets', () => {
    it('should compare two triplets and return a tuple of two numbers', () => {
        expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
    });
});
