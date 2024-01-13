import { angryProfessor } from '@ProblemSolving/Algorithms/Implementation'

test('should return whether the class is cancelled or not', () => {
    expect(angryProfessor(3, [-1, -3, 4, 2])).toEqual('YES')
})
