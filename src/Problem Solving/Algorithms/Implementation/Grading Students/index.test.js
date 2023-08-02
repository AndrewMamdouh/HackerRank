const gradingStudents = require(".");

test("should return the rounded grades of students", () => {
  expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
});
