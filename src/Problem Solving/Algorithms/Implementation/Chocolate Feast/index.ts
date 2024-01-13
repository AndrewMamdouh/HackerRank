/**
 * Finds out the number of chocolate bars Bobby can eat after taking full advantage of the promotion
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - Bobby's initial amount of money
 * @param {number} c - The cost of a chocolate bar
 * @param {number} m - The number of wrappers he can turn in for a free bar
 * @returns {number} The number of chocolates Bobby can eat
 */
const chocolateFeast = (n: number, c: number, m: number): number => {
    let barsCount = Math.floor(n / c),
        wrappersCount = Math.floor(n / c)
    while (wrappersCount >= m) {
        wrappersCount = wrappersCount - m + 1
        barsCount += 1
    }
    return barsCount
}

export default chocolateFeast
