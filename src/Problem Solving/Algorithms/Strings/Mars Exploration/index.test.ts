import { marsExploration } from '@ProblemSolving/Algorithms/Strings';

describe('Problem Solving » Algorithms » Strings » Mars Exploration', () => {
    it('should return the number of changed letters', () => {
        expect(marsExploration('SOSSPSSQSSOR')).toBe(3);
    });
});
