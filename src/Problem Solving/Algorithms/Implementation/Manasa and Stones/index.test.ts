import { stones } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Manasa and Stones', () => {
    it('should return possible values of the last stone', () => {
        expect(stones(3, 1, 2)).toEqual([2, 3, 4]);
    });
});
