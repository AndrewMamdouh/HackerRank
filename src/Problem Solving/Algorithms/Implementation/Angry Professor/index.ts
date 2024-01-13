/**
 * Determines if the class is cancelled.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} k - The threshold number of students
 * @param {number[]} a - The arrival times of the students
 * @returns {"YES" | "NO"} Whether the class is cancelled or not.
 */
const angryProfessor = (k: number, a: number[]): string => {
    const students = a.filter((time) => time <= 0).length
    return students < k ? 'YES' : 'NO'
}

export default angryProfessor
