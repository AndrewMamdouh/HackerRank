/**
 * A Discrete Mathematics professor has a class of students.
 * Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts.
 * Arrival times go from on time `arrivalTime <= 0` to arrived late `arrivalTime > 0`.
 *
 * Given the arrival time of each student and a threshold number of attendees, determine if the class is cancelled.
 *
 * @param {number} k - The threshold number of students
 * @param {number[]} a - The arrival times of the students
 * @returns {"YES" | "NO"} Whether the class is cancelled or not.
 * @example
 * ```ts
 * const result = angryProfessor(3, [-1, -3, 4, 2]);
 * console.log(result); // "YES"
 * ```
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 */
const angryProfessor = (k: number, a: number[]): string => {
    const students = a.filter((time) => time <= 0).length;
    return students < k ? 'YES' : 'NO';
};

export default angryProfessor;
