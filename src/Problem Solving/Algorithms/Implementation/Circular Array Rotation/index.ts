/**
 * Performs a number of right circular rotations and return the values of the elements at the given indices
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} a - The array to rotate
 * @param {number} k - The rotation count
 * @param {number[]} queries - The indices array to report
 * @returns {number[]} The values in the rotated (a) as requested in (m)
 */
const circularArrayRotation = (
    a: number[],
    k: number,
    queries: number[]
): number[] => {
    const aCopy = [...a],
        rotatedQueries: number[] = []
    for (let i = 0; i < k; i++) aCopy.unshift(aCopy.pop()!)
    for (const query of queries) rotatedQueries.push(aCopy[query])
    return rotatedQueries
}

export default circularArrayRotation
