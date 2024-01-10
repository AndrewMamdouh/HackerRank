/**
 * Calculates the ratios of positive, negative and zero values in the array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The array of positives, negatives and zeros
 * @returns {[string, string, string]} The ratios of positives, negatives and zeros
 */
const plusMinus = (arr: number[]): [string, string, string] => {
    const ratios: [number, number, number] = arr.reduce(
        (acc, cur) => {
            acc[cur > 0 ? 0 : cur < 0 ? 1 : 2]++
            return acc
        },
        [0, 0, 0]
    )
    return ratios.map((ratio) => (ratio / arr.length).toFixed(6)) as [
        string,
        string,
        string,
    ]
}

export default plusMinus
