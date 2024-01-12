import { countDuplicates } from '@Helpers'
/**
 * Determines the id of the most frequently sighted bird type
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} arr - The types of birds sighted
 * @returns {number} The lowest type id of the most frequently sighted birds
 */
const migratoryBirds = (arr: number[]): number => {
    const result = countDuplicates(arr)
    return +(
        Object.keys(result).find(
            (key) => result[key] === Math.max(...Object.values(result))
        ) ?? 0
    )
}

export default migratoryBirds
