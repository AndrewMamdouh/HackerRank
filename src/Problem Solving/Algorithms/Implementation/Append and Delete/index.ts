import { getLongestCommonSubStr } from '@Helpers';
/**
 * Determines whether you can convert (s) to (t) by performing exactly (k) of operations
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {string} s - The initial string
 * @param {string} t - The desired string
 * @param {number} k - The exact number of operations that must be performed
 * @returns {"Yes" | "No"} Whether this can be performed or not
 */
const appendAndDelete = (s: string, t: string, k: number): 'Yes' | 'No' => {
    let longestCommonStr = getLongestCommonSubStr(s, t);
    if (s.indexOf(longestCommonStr) !== 0) longestCommonStr = '';
    const maxOpsNum = s.length + t.length;
    return (maxOpsNum - longestCommonStr.length * 2 <= k &&
        (maxOpsNum - longestCommonStr.length * 2) % 2 === k % 2) ||
        maxOpsNum <= k
        ? 'Yes'
        : 'No';
};

export default appendAndDelete;
