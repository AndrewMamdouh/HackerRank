import { saveThePrisoner } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Save the Prisoner', () => {
    it('should return the chair number of the prisoner to warn', () => {
        expect(saveThePrisoner(5, 2, 1)).toBe(2);
    });
});
