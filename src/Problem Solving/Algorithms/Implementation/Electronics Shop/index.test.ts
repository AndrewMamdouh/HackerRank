import { getMoneySpent } from '@ProblemSolving/Algorithms/Implementation';

test('should return the maximum that can be spent', () => {
    expect(getMoneySpent([3, 1], [5, 2, 8], 10)).toBe(9);
});
