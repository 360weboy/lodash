var baseDifference = require('../internal/baseDifference'),
    slice = require('./slice');

/**
 * Creates an array excluding all provided values using `SameValueZero` for
 * equality comparisons.
 *
 * **Note:** `SameValueZero` comparisons are like strict equality comparisons,
 * e.g. `===`, except that `NaN` matches `NaN`. See the
 * [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to filter.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 * // => [2, 3, 4]
 */
function without(array) {
  return baseDifference(array, slice(arguments, 1));
}

module.exports = without;