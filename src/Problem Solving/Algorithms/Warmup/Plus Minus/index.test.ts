import { plusMinus } from '@ProblemSolving/Algorithms/Warmup';

test('should return the ratios of positive, negative and zero values in the array', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toEqual([
        '0.500000',
        '0.333333',
        '0.166667',
    ]);
});
