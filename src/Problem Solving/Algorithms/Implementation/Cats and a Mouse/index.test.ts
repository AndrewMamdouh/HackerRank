import { catAndMouse } from '@ProblemSolving/Algorithms/Implementation'

test('should return Either "Cat A", "Cat B", or "Mouse C"', () => {
    expect(catAndMouse(1, 2, 3)).toBe('Cat B')
})
