/**
 * source from StackOverflow
 * https://stackoverflow.com/questions/9453421/how-to-round-float-numbers-in-javascript/19794305#19794305
 * Credit to https://stackoverflow.com/users/1646706/a-s-panchenko for the original answer
 * tested and typed
 */

export { }
declare global {
  interface Number {
    /**
    * Decimal adjustment of a number.
    * @param {number} exponent (The exponent (the 10 logarithm of the adjustment base).)
    * @examples
    * - 55.55.Round(-1);   // 55.6
    * - 55.549.Round(-1);  // 55.5
    * - 55.Round(1);       // 60
    * - 54.9.Round(1);     // 50
    * - -55.55.Round(-1);  // -55.5
    * - -55.551.Round(-1); // -55.6
    * - -55.Round(1);      // -50
    * - -55.1.Round(1);    // -60
    * - 1.005.Round(-2);   // 1.01
    */
    Round(exponent: number): number
    /**
    * Decimal adjustment of a number.
    * @param {number} exponent (The exponent (the 10 logarithm of the adjustment base).)
    * @examples
    * - 55.59.Floor(-1);   // 55.5
    * - 59.Floor(1);       // 50
    * - -55.51.Floor(-1);  // -55.6
    * - -51.Floor(1);      // -60
     */
    Floor(exponent: number): number
    /**
     * Decimal adjustment of a number.
     * @param {number} exponent (The exponent (the 10 logarithm of the adjustment base).)
     * @examples
     * - 55.51.Ceil(-1);    // 55.6
     * - 51.Ceil(1);        // 60
     * - -55.59.Ceil(-1);   // -55.5
     * - -59.Ceil(1);       // -50
     */
    Ceil(exponent: number): number
  }
}

/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type: string, value: any, exp: number): number {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // If the value is negative...
  if (value < 0) {
    return -decimalAdjust(type, -value, exp);
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
if (!Number.prototype.Round) {
  Number.prototype.Round = function (exp) {
    return decimalAdjust('round', this, exp);
  };
}
// Decimal floor
if (!Number.prototype.Floor) {
  Number.prototype.Floor = function (exp) {
    return decimalAdjust('floor', this, exp);
  };
}
// Decimal ceil
if (!Number.prototype.Ceil) {
  Number.prototype.Ceil = function (exp) {
    return decimalAdjust('ceil', this, exp);
  };
}