const diagonalDifference = require(".");

test("should return the absolute diagonal difference of 2d array", () => {
  expect(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ])
  ).toBe(15);
});
