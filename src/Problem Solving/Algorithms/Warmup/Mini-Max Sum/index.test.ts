import { miniMaxSum } from '@ProblemSolving/Algorithms/Warmup';

describe('Problem Solving » Algorithms » Warmup » Mini-Max Sum', () => {
    it('should return the min-max sum of the array', () => {
        expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
    });
});
