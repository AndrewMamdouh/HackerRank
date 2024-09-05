import { cavityMap } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Cavity Map', () => {
    it('should return the modified grid', () => {
        expect(cavityMap(['1112', '1912', '1892', '1234'])).toEqual([
            '1112',
            '1X12',
            '18X2',
            '1234',
        ]);
    });
});
