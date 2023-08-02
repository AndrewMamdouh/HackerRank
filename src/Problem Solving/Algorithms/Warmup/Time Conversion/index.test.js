const timeConversion = require(".");

test("should convert 12-hour time to 24-hour time", () => {
  expect(timeConversion("07:05:45PM")).toMatch("19:05:45");
});
