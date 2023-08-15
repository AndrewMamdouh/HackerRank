/**
 * Counts needed characters to convert password to a strong one
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {number} n - The password length
 * @param {string} password - The password to be analyzed
 * @returns {number} The number characters needed to be a strong password
 */
function minimumNumber(n, password) {
  const regexArr = [
    /^(?=.*[a-z])/,
    /^(?=.*[A-Z])/,
    /^(?=.*[0-9])/,
    /(?=.*[!@#$%^&*()\-+])/,
  ];
  const lacksCount = regexArr.reduce(
    (acc, cur) => (password.match(cur) ? acc : ++acc),
    0
  );
  return n + lacksCount > 5 ? lacksCount : 6 - n;
}

module.exports = minimumNumber;
