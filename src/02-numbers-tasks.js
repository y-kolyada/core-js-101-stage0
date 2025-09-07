/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  return width * height;
}

// console.log(getRectangleArea(5, 10)); // 50
// console.log(getRectangleArea(5, 5)); // 25

/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

// console.log(getCircleCircumference(5)); // 31.41592653589793
// console.log(getCircleCircumference(3.14)); // 19.729201864543903
// console.log(getCircleCircumference(0)); // 0

/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  // use an approach that avoids overflow for large values
  return value1 / 2 + value2 / 2;
}

// console.log(getAverage(5, 5)); // 5
// console.log(getAverage(10, 0)); // 5
// console.log(getAverage(-3, 3)); // 0

/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

// console.log(getDistanceBetweenPoints(0, 0, 0, 1)); // 1
// console.log(getDistanceBetweenPoints(0, 0, 1, 0)); // 1
// console.log(getDistanceBetweenPoints(-5, 0, 10, -10)); // 18.027756377319946

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

// console.log(getLinearEquationRoot(5, -10)); // 2
// console.log(getLinearEquationRoot(1, 8)); // -8
// console.log(getLinearEquationRoot(5, 0)); // 0

/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.hypot(x1, y1);
  const magnitude2 = Math.hypot(x2, y2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

// console.log(getAngleBetweenVectors(1, 0, 0, 1)); // π/2
// console.log(getAngleBetweenVectors(0, 1, 0, -1)); // π
// console.log(getAngleBetweenVectors(0, -1, 1, 0)); // π/2
// console.log(getAngleBetweenVectors(0, 1, 0, 1)); // 0
// console.log(getAngleBetweenVectors(0, 1, 1, 2)); // 0

/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  return value % 10;
}

// console.log(getLastDigit(100)); // 0
// console.log(getLastDigit(37)); // 7
// console.log(getLastDigit(5)); // 5
// console.log(getLastDigit(0)); // 0

/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  return Number(value);
}

// console.log(parseNumberFromString('100')); // 100
// console.log(parseNumberFromString('37')); // 37
// console.log(parseNumberFromString('-525.5')); // -525.5

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

// console.log(getParallelepipedDiagonal(1, 1, 1)); // 1.7320508075688772
// console.log(getParallelepipedDiagonal(3, 3, 3)); // 5.196152422706632
// console.log(getParallelepipedDiagonal(1, 2, 3)); // 3.741657386773941

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow;
  return Math.round(num / factor) * factor;
}

// console.log(roundToPowerOfTen(1234, 0)); // 1234
// console.log(roundToPowerOfTen(1234, 1)); // 1230
// console.log(roundToPowerOfTen(1234, 2)); // 1200
// console.log(roundToPowerOfTen(1234, 3)); // 1000
// console.log(roundToPowerOfTen(1678, 0)); // 1678
// console.log(roundToPowerOfTen(1678, 1)); // 1680
// console.log(roundToPowerOfTen(1678, 2)); // 1700
// console.log(roundToPowerOfTen(1678, 3)); // 2000

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(4)); // false
// console.log(isPrime(5)); // true
// console.log(isPrime(6)); // false
// console.log(isPrime(7)); // true
// console.log(isPrime(11)); // true
// console.log(isPrime(12)); // false
// console.log(isPrime(16)); // false
// console.log(isPrime(17)); // true

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  const result = Number(value);
  return Number.isNaN(result) ? def : result;
}

// console.log(toNumber(null, 0)); // 0
// console.log(toNumber('test', 0)); // 0
// console.log(toNumber('1', 0)); // 1
// console.log(toNumber(42, 0)); // 42
// console.log(toNumber(new Number(42), 0)); // 42

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
