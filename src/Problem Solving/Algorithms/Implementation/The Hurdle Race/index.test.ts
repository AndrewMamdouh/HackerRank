import { theHurdleRace } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » The Hurdle Race', () => {
    it('should return how many doses are required', () => {
        expect(theHurdleRace(4, [1, 6, 3, 5, 2])).toBe(2);
    });
});
