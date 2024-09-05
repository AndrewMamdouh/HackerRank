import { birthdayCakeCandles } from '@ProblemSolving/Algorithms/Warmup';

describe('Problem Solving » Algorithms » Warmup » Birthday Cake Candles', () => {
    it('should return the number of tallest candles in the array', () => {
        expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2);
    });
});
