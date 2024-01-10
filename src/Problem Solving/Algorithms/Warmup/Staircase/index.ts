/**
 * Generates a staircase using # symbols and spaces.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The size of the staircase.
 * @returns {string} The staircase using # symbols and spaces.
 */
const staircase = (n: number): string => {
    let str = ''
    for (let i = 1; i <= n; i++) {
        str += `${' '.repeat(n - i)}${'#'.repeat(i)}\n`
    }
    return str
}

export default staircase
