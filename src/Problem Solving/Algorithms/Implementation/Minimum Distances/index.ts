/**
 * Finds the minimum distance between any pair of equal elements in the array
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} a - An array of integers
 * @returns {number} The minimum distance found or -1 if there are no matching elements
 */
const minimumDistances = (a: number[]): number => {
    let minDistanceIdxDiff: number | undefined
    for (let i = 0; i < a.length; i++) {
        const matchedDistanceIdx =
            a.slice(i + 1).findIndex((dis) => dis === a[i]) + 1
        if (
            matchedDistanceIdx &&
            (!minDistanceIdxDiff || minDistanceIdxDiff > matchedDistanceIdx)
        )
            minDistanceIdxDiff = matchedDistanceIdx
    }
    return minDistanceIdxDiff ?? -1
}

export default minimumDistances
