import { fairRations } from '@ProblemSolving/Algorithms/Implementation';

test('should return the minimum number of loaves required', () => {
    expect(fairRations([2, 3, 4, 5, 6])).toBe(4);
});
