import { jumpingOnClouds } from '@ProblemSolving/Algorithms/Implementation'

test('should return the remaining energy level', () => {
    expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)).toEqual(92)
})
