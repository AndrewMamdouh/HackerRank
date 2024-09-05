import { dayOfProgrammer } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Day of the Programmer', () => {
    it('should return date of the programmer day in the form [dd.mm.yyyy]', () => {
        expect(dayOfProgrammer(2017)).toBe('13.09.2017');
    });
});
