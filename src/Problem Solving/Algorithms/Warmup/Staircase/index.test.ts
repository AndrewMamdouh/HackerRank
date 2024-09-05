import { staircase } from '@ProblemSolving/Algorithms/Warmup';

describe('Problem Solving » Algorithms » Warmup » Staircase', () => {
    it('should return a staircase as string', () => {
        expect(staircase(6)).toMatch(
            '     #\n    ##\n   ###\n  ####\n #####\n######\n'
        );
    });
});
