import { breakingRecords } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Breaking the Records', () => {
    it('should return the numbers representing the times most points records and least points records have been broken', () => {
        expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([
            2, 4,
        ]);
    });
});
