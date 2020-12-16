type CompareType = string | number | boolean | Array<any> | object
export type CompareFunctionType = (a: CompareType, b: CompareType) => boolean

/**
 * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
 * @param {CompareType} a
 * @param {CompareType} b
 * @returns {number}
 */
const compare = (a: CompareType, b: CompareType): number => {
  if (a === b) {
    return 0
  }

  return a < b ? -1 : 1
}

/**
 * Checks if two variables are equal.
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export const equal = (a: CompareType, b: CompareType): boolean =>
  compare(a, b) === 0

/**
 * Checks if variable "a" is less than "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export const lessThan = (a: CompareType, b: CompareType): boolean =>
  compare(a, b) < 0

/**
 * Checks if variable "a" is greater than "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export const greaterThan = (a: CompareType, b: CompareType): boolean =>
  compare(a, b) > 0

/**
 * Checks if variable "a" is less than or equal to "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export const lessThanOrEqual = (a: CompareType, b: CompareType): boolean =>
  lessThan(a, b) || equal(a, b)

/**
 * Checks if variable "a" is greater than or equal to "b".
 * @param {CompareType} a
 * @param {CompareType} b
 * @return {boolean}
 */
export const greaterThanOrEqual = (a: CompareType, b: CompareType): boolean =>
  greaterThan(a, b) || equal(a, b)
