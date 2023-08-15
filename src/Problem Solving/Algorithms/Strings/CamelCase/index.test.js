const camelcase = require(".");

test("should return the number of words", () => {
  expect(camelcase("saveChangesInTheEditor")).toBe(5);
});
