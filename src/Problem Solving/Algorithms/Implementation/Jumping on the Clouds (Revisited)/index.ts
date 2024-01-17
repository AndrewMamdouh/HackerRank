/**
 * Determines the final value of energy level after the game ends
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} c - The cloud types along the path
 * @param {number} k - The length of one jump
 * @returns {number} The energy level remaining.
 */
const jumpingOnClouds = (c: number[], k: number): number => {
    const n = c.length
    let remainingEnergy = 100,
        curCloud = 0
    do {
        curCloud = (curCloud + k) % n
        remainingEnergy -= c[curCloud] ? 3 : 1
    } while (curCloud)
    return remainingEnergy
}

export default jumpingOnClouds
