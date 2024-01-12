/**
 * Finds the longest subarray where the absolute difference between any two elements is less than or equal to 1
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} x - Cat A's position
 * @param {number} y - Cat B's position
 * @param {number} z - Mouse C's position
 * @returns {"Cat A" | "Cat B" | "Mouse C"} The length of the longest subarray that meets the criterion
 */
const catAndMouse = (
    x: number,
    y: number,
    z: number
): 'Cat A' | 'Cat B' | 'Mouse C' => {
    const catADistanceDiff = Math.abs(x - z)
    const catBDistanceDiff = Math.abs(y - z)
    return catBDistanceDiff > catADistanceDiff
        ? 'Cat A'
        : catADistanceDiff > catBDistanceDiff
          ? 'Cat B'
          : 'Mouse C'
}

export default catAndMouse
