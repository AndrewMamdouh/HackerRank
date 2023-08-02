const staircase = require(".");

test("should return a staircase as string", () => {
  expect(staircase(6)).toMatch(
    "     #\n    ##\n   ###\n  ####\n #####\n######\n"
  );
});
