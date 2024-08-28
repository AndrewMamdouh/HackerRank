import { minimumNumber } from '@ProblemSolving/Algorithms/Strings';

test('should return the number of characters needed to be a strong password', () => {
    expect(minimumNumber(3, 'Ab1')).toBe(3);
});
