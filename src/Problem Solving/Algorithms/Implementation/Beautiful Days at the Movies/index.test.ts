import { beautifulDays } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Beautiful Days at the Movies', () => {
    it('should return the number of beautiful days', () => {
        expect(beautifulDays(20, 23, 6)).toBe(2);
    });
});
