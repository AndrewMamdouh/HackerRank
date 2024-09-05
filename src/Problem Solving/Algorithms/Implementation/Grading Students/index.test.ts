import { gradingStudents } from '@ProblemSolving/Algorithms/Implementation';

describe('Problem Solving » Algorithms » Implementation » Grading Students', () => {
    it('should return the rounded grades of students', () => {
        expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
    });
});
