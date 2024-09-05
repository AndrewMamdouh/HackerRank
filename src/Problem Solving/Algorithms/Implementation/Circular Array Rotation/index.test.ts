import { circularArrayRotation } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Circular Array Rotation', () => {
    it('should return the values in the rotated array', () => {
        expect(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])).toEqual([
            2, 3, 1,
        ]);
    });
});
