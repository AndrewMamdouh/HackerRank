/**
 * Determines the maximum distance from any city to its nearest space station.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The number of cities
 * @param {number[]} c - The indices of cities with a space station
 * @returns {number} The maximum distance any city is from a space station
 */
const flatlandSpaceStations = (n: number, c: number[]): number => {
    let biggestGap = 0
    const sortedSpaces = [...c].sort((x, y) => x - y)
    for (let i = sortedSpaces.length - 1; i > 0; i--)
        biggestGap = Math.max(sortedSpaces[i] - sortedSpaces[i - 1], biggestGap)
    return Math.max(
        Math.floor(biggestGap / 2),
        sortedSpaces[0],
        n - sortedSpaces.at(-1)! - 1
    )
}

export default flatlandSpaceStations
