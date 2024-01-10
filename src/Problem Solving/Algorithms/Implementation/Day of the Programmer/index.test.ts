import { dayOfProgrammer } from '@ProblemSolving/Algorithms/Implementation'

test('should return date of the programmer day in the form [dd.mm.yyyy]', () => {
    expect(dayOfProgrammer(2017)).toBe('13.09.2017')
})
