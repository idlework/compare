import {
  CompareFunctionType,
  equal,
  greaterThan,
  greaterThanOrEqual,
  lessThan,
  lessThanOrEqual,
} from "./"

// TODO: extend with more types if needed
const a = "a"
const b = "b"
const ab = "ab"

const shouldBeEquel = (fn: CompareFunctionType) => {
  expect(fn(0, 0)).toBe(true)
  expect(fn(a, a)).toBe(true)
  expect(fn(true, true)).toBe(true)
}

const shouldNotBeEquel = (fn: CompareFunctionType) => {
  expect(fn(0, 1)).toBe(false)
  expect(fn(a, b)).toBe(false)
  expect(fn(true, false)).toBe(false)
}

const shouldBeLessThan = (fn: CompareFunctionType) => {
  expect(fn(1, 2)).toBe(true)
  expect(fn(-1, 2)).toBe(true)
  expect(fn(a, b)).toBe(true)
  expect(fn(a, ab)).toBe(true)
  expect(fn(false, true)).toBe(true)
}

const shouldBeGreaterThan = (fn: CompareFunctionType) => {
  expect(fn(10, 2)).toBe(true)
  expect(fn(ab, a)).toBe(true)
  expect(fn(true, false)).toBe(true)
}

const shouldNotBeLessThan = (
  fn: CompareFunctionType,
  ignoreEqual?: boolean
) => {
  expect(fn(2, 1)).toBe(false)
  expect(fn(b, a)).toBe(false)
  expect(fn(ab, a)).toBe(false)
  expect(fn(true, false)).toBe(false)
  !ignoreEqual && expect(fn(true, true)).toBe(false)
}

const shouldNotBeGreaterThan = (
  fn: CompareFunctionType,
  ignoreEqual?: boolean
) => {
  expect(fn(1, 2)).toBe(false)
  expect(fn(a, b)).toBe(false)
  expect(fn(a, ab)).toBe(false)
  expect(fn(false, true)).toBe(false)
  !ignoreEqual && expect(fn(true, true)).toBe(false)
}

describe("Equal", () => {
  it("should be equal", () => shouldBeEquel(equal))
  it("should be not equal", () => shouldNotBeEquel(equal))
})

describe("Less than", () => {
  it("should be less than", () => shouldBeLessThan(lessThan))
  it("should not be less than", () => shouldNotBeLessThan(lessThan))
})

describe("Greater than", () => {
  it("should be greater than", () => shouldBeGreaterThan(greaterThan))
  it("should not be greater than", () => shouldNotBeGreaterThan(greaterThan))
})

describe("Less then or equal", () => {
  it("should be less then or equal", () => {
    shouldBeEquel(lessThanOrEqual)
    shouldBeLessThan(lessThanOrEqual)
  })

  it("should not be less then or equal", () => {
    shouldNotBeLessThan(lessThanOrEqual, true)
    expect(lessThanOrEqual(1, 0)).toBe(false)
    expect(lessThanOrEqual(b, a)).toBe(false)
    expect(lessThanOrEqual(true, false)).toBe(false)
  })
})

describe("Greater than or equal", () => {
  it("should be greater than or equal", () => {
    shouldBeEquel(greaterThanOrEqual)
    shouldBeGreaterThan(greaterThanOrEqual)
  })

  it("should not be greater than or equal", () => {
    shouldNotBeGreaterThan(greaterThanOrEqual, true)
    expect(greaterThanOrEqual(0, 1)).toBe(false)
    expect(greaterThanOrEqual(a, b)).toBe(false)
    expect(greaterThanOrEqual(false, true)).toBe(false)
  })
})
