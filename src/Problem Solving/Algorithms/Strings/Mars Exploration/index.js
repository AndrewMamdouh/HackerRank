/**
 * Counts the letters changed by radiation.
 * @author Andrew Mamdouh <andrewm.developer@gmail.com>
 * @param {string} s - The string received on Earth
 * @returns {number} The number of letters changed during transmission
 */
function marsExploration(s) {
  const validMsg = "SOS";
  const msgCount = s.length / 3;
  let msg,
    alters = 0;
  for (let i = 0; i < msgCount; i++) {
    msg = s.substring(i * 3, i * 3 + 3);
    for (let j = 0; j < 3; j++) alters += validMsg[j] !== msg[j] ? 1 : 0;
  }
  return alters;
}
module.exports = marsExploration;
