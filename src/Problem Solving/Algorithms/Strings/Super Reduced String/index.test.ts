import { superReducedString } from '@ProblemSolving/Algorithms/Strings';

describe('Problem Solving » Algorithms » Strings » Super Reduced String', () => {
    it('should return the reduced string', () => {
        expect(superReducedString('aaabccddd')).toBe('abd');
    });
});
