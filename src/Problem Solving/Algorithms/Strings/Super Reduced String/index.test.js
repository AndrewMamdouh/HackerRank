const superReducedString = require(".");

test("should return the reduced string", () => {
  expect(superReducedString("aaabccddd")).toBe("abd");
});
