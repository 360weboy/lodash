var baseCallback = require('../internal/baseCallback'),
    slice = require('./slice');

/**
 * Creates a slice of `array` with elements taken from the beginning. Elements
 * are taken until `predicate` returns falsey. The predicate is bound to
 * `thisArg` and invoked with three arguments; (value, index, array).
 *
 * If a property name is provided for `predicate` the created "_.pluck" style
 * callback returns the property value of the given element.
 *
 * If an object is provided for `predicate` the created "_.where" style callback
 * returns `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per element.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeWhile([1, 2, 3], function(n) { return n < 3; });
 * // => [1, 2]
 *
 * var users = [
 *   { 'user': 'barney',  'status': 'busy', 'active': true },
 *   { 'user': 'fred',    'status': 'busy', 'active': false },
 *   { 'user': 'pebbles', 'status': 'away', 'active': true }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.pluck(_.takeWhile(users, 'active'), 'user');
 * // => ['barney']
 *
 * // using "_.where" callback shorthand
 * _.pluck(_.takeWhile(users, { 'status': 'busy' }), 'user');
 * // => ['barney', 'fred']
 */
function takeWhile(array, predicate, thisArg) {
  var index = -1,
      length = array ? array.length : 0;

  predicate = baseCallback(predicate, thisArg, 3);
  while (++index < length && predicate(array[index], index, array)) {}
  return slice(array, 0, index);
}

module.exports = takeWhile;