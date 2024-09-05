import { camelcase } from '@ProblemSolving/Algorithms/Strings';

describe('Problem Solving » Algorithms » Strings » CamelCase', () => {
    it('should return the number of words', () => {
        expect(camelcase('saveChangesInTheEditor')).toBe(5);
    });
});
