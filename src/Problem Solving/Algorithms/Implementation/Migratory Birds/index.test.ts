import { migratoryBirds } from '@ProblemSolving/Algorithms/Implementation';

test('should return the id of the most frequently sighted bird type', () => {
    expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
});
