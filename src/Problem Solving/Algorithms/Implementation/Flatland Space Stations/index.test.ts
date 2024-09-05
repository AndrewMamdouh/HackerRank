import { flatlandSpaceStations } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Flatland Space Stations', () => {
    it('should return the maximum distance', () => {
        expect(flatlandSpaceStations(5, [0, 4])).toBe(2);
    });
});
