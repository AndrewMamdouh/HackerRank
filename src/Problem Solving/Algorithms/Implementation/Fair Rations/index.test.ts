import { fairRations } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Fair Rations', () => {
    it('should return the minimum number of loaves required', () => {
        expect(fairRations([2, 3, 4, 5, 6])).toBe(4);
    });
});
