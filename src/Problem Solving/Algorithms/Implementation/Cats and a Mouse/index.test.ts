import { catAndMouse } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Cats and a Mouse', () => {
    it('should return Either "Cat A", "Cat B", or "Mouse C"', () => {
        expect(catAndMouse(1, 2, 3)).toBe('Cat B');
    });
});
