import { kangaroo } from '@ProblemSolving/Algorithms/Implementation'

test('should return whether both kangaroos can reach at the same location at the same time or not', () => {
    expect(kangaroo(0, 3, 4, 2)).toBe('YES')
})
