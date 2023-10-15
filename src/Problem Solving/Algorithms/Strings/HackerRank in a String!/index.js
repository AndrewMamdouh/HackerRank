/**
 * Check if string have a subsequence of characters spell the word "hackerrank"
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {string} s - The string to analyze
 * @returns {"YES" | "NO"} Whether string includes the word "hackerrank"
 */
function hackerrankInString(s) {
  const sequence = "hackerrank";
  let lastIdx = -1;
  for (let i = 0; i < sequence.length; i++) {
    lastIdx = s.indexOf(sequence[i], lastIdx + 1);
    if (lastIdx === -1) return "NO";
  }
  return "YES";
}
module.exports = hackerrankInString;
