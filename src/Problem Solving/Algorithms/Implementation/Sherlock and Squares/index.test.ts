import { squares } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Sherlock and Squares', () => {
    it('should return the number of square integers in the range', () => {
        expect(squares(3, 9)).toBe(2);
    });
});
