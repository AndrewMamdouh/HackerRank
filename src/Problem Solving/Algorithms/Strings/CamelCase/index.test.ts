import { camelcase } from '@ProblemSolving/Algorithms/Strings'

test('should return the number of words', () => {
    expect(camelcase('saveChangesInTheEditor')).toBe(5)
})
