const countApplesAndOranges = require(".");

test("should return the number of apples and oranges that fall on Sam's house", () => {
  expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toEqual([
    1, 1,
  ]);
});
