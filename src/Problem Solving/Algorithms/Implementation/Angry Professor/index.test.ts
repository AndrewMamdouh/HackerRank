import { angryProfessor } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Angry Professor', () => {
    it('should return whether the class is cancelled or not', () => {
        expect(angryProfessor(3, [-1, -3, 4, 2])).toBe('YES');
    });
});
