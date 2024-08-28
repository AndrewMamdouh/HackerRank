import { countingValleys } from '@ProblemSolving/Algorithms/Implementation';

test('should return the number of valleys traversed', () => {
    expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
});
