import { pageCount } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Drawing Book', () => {
    it('should return the number of pages to turn', () => {
        expect(pageCount(6, 2)).toBe(1);
    });
});
