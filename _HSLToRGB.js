/**
 * @method _HSLToRGB
 * @see https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
 * @param {Number} h
 * @param {Number} s
 * @param {Number} l
 * @returns {number[]}
 * @private
 */
const _HSLToRGB = (h, s, l) => {
  s /= 100
  l /= 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [255 * f(0), 255 * f(8), 255 * f(4)]
}

export default _HSLToRGB
