import { superReducedString } from '@ProblemSolving/Algorithms/Strings';

test('should return the reduced string', () => {
    expect(superReducedString('aaabccddd')).toBe('abd');
});
