import { simpleArraySum } from '@ProblemSolving/Algorithms/Warmup';

describe('Problem Solving » Algorithms » Warmup » Simple Array Sum', () => {
    it('should return the sum of the array', () => {
        expect(simpleArraySum([1, 2, 3, 4, 10, 11])).toBe(31);
    });
});
