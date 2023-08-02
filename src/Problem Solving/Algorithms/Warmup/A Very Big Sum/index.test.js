const aVeryBigSum = require(".");

test("should return the sum of the big numbers array", () => {
  expect(
    aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
  ).toBe(5000000015);
});
