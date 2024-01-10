/**
 * Calculates min-max sum for an array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The array of numbers to get min-max sum for
 * @returns {[number, number]} The min-max sum [min, max]
 */
const miniMaxSum = (arr: number[]): [number, number] => {
    const sum = arr.reduce((acc, cur) => acc + cur)
    arr.sort((x, y) => x - y)
    return [sum - (arr.at(-1) || 0), sum - arr[0]]
}

export default miniMaxSum
