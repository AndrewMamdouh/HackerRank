/**
 *  Determine the chair number occupied by the prisoner who will receive that candy.
 *
 * Determines the chair number occupied by the prisoner who will receive that candy
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The number of prisoners
 * @param {number} m - The number of sweets
 * @param {number} s - The chair number to begin passing out sweets from
 * @returns {number} The chair number of the prisoner to warn
 */
const saveThePrisoner = (n: number, m: number, s: number): number => {
    const chairNum = (m % n || n) + (s - 1)
    return chairNum > n ? chairNum - n : chairNum
}

export default saveThePrisoner
