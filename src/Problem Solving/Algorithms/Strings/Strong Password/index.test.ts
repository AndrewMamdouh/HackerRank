import { minimumNumber } from '@ProblemSolving/Algorithms/Strings';

describe('Problem Solving » Algorithms » Strings » Strong Password', () => {
    it('should return the number of characters needed to be a strong password', () => {
        expect(minimumNumber(3, 'Ab1')).toBe(3);
    });
});
