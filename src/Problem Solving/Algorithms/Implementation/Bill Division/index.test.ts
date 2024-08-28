import { bonAppetit } from '@ProblemSolving/Algorithms/Implementation';

test('should log the overcharged amount', () => {
    console.log = jest.fn();
    bonAppetit([3, 10, 2, 9], 1, 12);
    expect(console.log).toHaveBeenCalledWith(5);
});
