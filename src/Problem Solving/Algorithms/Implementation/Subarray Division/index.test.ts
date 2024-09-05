import { birthday } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Subarray Division', () => {
    it('should return the number of ways the chocolate bar can be divided', () => {
        expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
    });
});
