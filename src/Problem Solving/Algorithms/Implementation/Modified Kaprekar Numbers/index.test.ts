import { kaprekarNumbers } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Modified Kaprekar Numbers', () => {
    it('should return the modified Kaprekar numbers', () => {
        expect(kaprekarNumbers(1, 100)).toBe('1 9 45 55 99');
    });
});
