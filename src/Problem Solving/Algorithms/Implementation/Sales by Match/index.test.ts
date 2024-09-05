import { sockMerchant } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Sales by Match', () => {
    it('should return the number of pairs', () => {
        expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
    });
});
