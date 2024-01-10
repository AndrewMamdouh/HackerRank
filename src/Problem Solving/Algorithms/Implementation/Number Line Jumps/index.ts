/**
 * Finds out whether both kangaroos can reach at the same location at the same time or not
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} x1 - The starting position for kangaroo 1
 * @param {number} v1 - The jump distance for kangaroo 1
 * @param {number} x2 - The starting position for kangaroo 2
 * @param {number} v2 - The jump distance for kangaroo 2
 * @returns {"YES" | "NO"} Whether they can reach at the same location at the same time or not
 */
const kangaroo = (
    x1: number,
    v1: number,
    x2: number,
    v2: number
): 'YES' | 'NO' => {
    if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) return 'NO'
    const jumps = (x2 - x1) / (v1 - v2)
    return jumps >= 0 && Number.isInteger(jumps) ? 'YES' : 'NO'
}

export default kangaroo
