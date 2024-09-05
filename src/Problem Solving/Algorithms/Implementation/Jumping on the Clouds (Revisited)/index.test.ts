import { jumpingOnClouds } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Jumping on the Clouds (Revisited)', () => {
    it('should return the remaining energy level', () => {
        expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)).toBe(92);
    });
});
