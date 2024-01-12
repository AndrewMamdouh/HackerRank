/**
 * Given price lists for keyboards and USB drives and a budget, find the maximum cost to buy them
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number[]} keyboards - The keyboard prices
 * @param {number[]} drives - The drive prices
 * @param {number} b - The budget
 * @returns {number} the maximum that can be spent, or -1 if it is not possible to buy both items
 */
const getMoneySpent = (
    keyboards: number[],
    drives: number[],
    b: number
): number => {
    let totalPrice = -1
    for (const keyboard of keyboards) {
        for (const drive of drives) {
            if (b >= keyboard + drive) totalPrice = keyboard + drive
        }
    }
    return totalPrice
}

export default getMoneySpent
