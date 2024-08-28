/**
 * Rounds the grades of students as appropriate
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} grades - The grades of students
 * @returns {number[]} The rounded grades of students
 */
const gradingStudents = (grades: number[]): number[] => {
    return grades.map((grade) => {
        const nextMultiple = Math.ceil(grade / 5) * 5;
        return !(grade < 38) && nextMultiple - grade < 3 ? nextMultiple : grade;
    });
};

export default gradingStudents;
