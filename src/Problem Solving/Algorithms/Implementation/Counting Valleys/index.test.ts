import { countingValleys } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Counting Valleys', () => {
    it('should return the number of valleys traversed', () => {
        expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
    });
});
