import { sockMerchant } from '@ProblemSolving/Algorithms/Implementation'

test('should return the number of pairs', () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3)
})
