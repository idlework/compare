"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greaterThanOrEqual = exports.lessThanOrEqual = exports.greaterThan = exports.lessThan = exports.equal = void 0;
/**
 * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
 * @param {CompareType} a
 * @param {CompareType} b
 * @returns {number}
 */
var compare = function (a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
};
/**
 * Checks if two variables are equal.
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
var equal = function (a, b) {
    return compare(a, b) === 0;
};
exports.equal = equal;
/**
 * Checks if variable "a" is less than "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
var lessThan = function (a, b) {
    return compare(a, b) < 0;
};
exports.lessThan = lessThan;
/**
 * Checks if variable "a" is greater than "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
var greaterThan = function (a, b) {
    return compare(a, b) > 0;
};
exports.greaterThan = greaterThan;
/**
 * Checks if variable "a" is less than or equal to "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
var lessThanOrEqual = function (a, b) {
    return exports.lessThan(a, b) || exports.equal(a, b);
};
exports.lessThanOrEqual = lessThanOrEqual;
/**
 * Checks if variable "a" is greater than or equal to "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
var greaterThanOrEqual = function (a, b) {
    return exports.greaterThan(a, b) || exports.equal(a, b);
};
exports.greaterThanOrEqual = greaterThanOrEqual;
