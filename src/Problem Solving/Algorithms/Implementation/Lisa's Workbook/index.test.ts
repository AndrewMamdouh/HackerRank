import { workbook } from '@ProblemSolving/Algorithms/Implementation';

describe("Problem Solving » Algorithms » Implementation » Lisa's Workbook", () => {
    it('should return the number of special problems in the workbook', () => {
        expect(workbook(5, 3, [4, 2, 6, 1, 10])).toBe(4);
    });
});
