export declare type CompareType = string | number | boolean;
export declare type CompareFunctionType = (a: CompareType, b: CompareType) => boolean;
/**
 * Checks if two variables are equal.
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export declare const equal: (a: CompareType, b: CompareType) => boolean;
/**
 * Checks if variable "a" is less than "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export declare const lessThan: (a: CompareType, b: CompareType) => boolean;
/**
 * Checks if variable "a" is greater than "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export declare const greaterThan: (a: CompareType, b: CompareType) => boolean;
/**
 * Checks if variable "a" is less than or equal to "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export declare const lessThanOrEqual: (a: CompareType, b: CompareType) => boolean;
/**
 * Checks if variable "a" is greater than or equal to "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export declare const greaterThanOrEqual: (a: CompareType, b: CompareType) => boolean;
