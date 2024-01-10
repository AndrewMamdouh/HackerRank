/**
 * Reduce a string of lowercase characters by deleting all pairs of adjacent letters that match
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {string} s - The string to reduce
 * @returns {string} The reduced string or "Empty String"
 */
const superReducedString = (s: string): string => {
    let charStack = ''
    for (const char of s) {
        if (char === charStack.at(-1)) charStack = charStack.slice(0, -1)
        else charStack += char
    }
    return charStack ? charStack : 'Empty String'
}

export default superReducedString
