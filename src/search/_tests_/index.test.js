const {
  searchEqualValue,
  searchLastEqualValue,
  searchMoreThanValue,
  searchLastLessThanValue
} = require('../index')

// 查找第一个值等于给定值的元素
describe('test searchEqualValu', () => {
  const arr = [1, 2, 3, 3, 3, 4, 5, 6]
  // 找到目标元素
  test('exist', () => {
    const index = searchEqualValue(arr, 3)
    expect(index).toBe(2)
  })
  // 找不到目标元素
  test('no exist', () => {
    const index = searchEqualValue(arr, 7)
    expect(index).toBe(-1)
  })
})

// 查找最后一个值等于给定值的元素
describe('test searchLastEqualValue', () => {
  const arr = [1, 2, 3, 3, 3, 4, 5, 6]
  // 找到目标元素
  test('exist', () => {
    const index = searchLastEqualValue(arr, 3)
    expect(index).toBe(4)
  })
  // 找不到目标元素
  test('no exist', () => {
    const index = searchLastEqualValue(arr, 7)
    expect(index).toBe(-1)
  })
})

// 查找第一个大于等于给定值的元素
describe('test searchLastEqualValue', () => {
  const arr = [1, 2, 3, 3, 3, 4, 5, 6, 8, 8, 8, 9]
  // 找到目标元素
  test('exist', () => {
    const index = searchMoreThanValue(arr, 3)
    expect(index).toBe(2)
  })
  test('more than', () => {
    const index = searchMoreThanValue(arr, 7)
    expect(index).toBe(8)
  })
  // 找不到目标元素
  test('no exist', () => {
    const index = searchMoreThanValue(arr, 10)
    expect(index).toBe(-1)
  })
})

// 查找最后一个小于等于给定值的元素
describe('test searchLastLessThanValue', () => {
  const arr = [1, 2, 3, 3, 3, 4, 5, 6, 8, 8, 8, 9]
  // 找到目标元素
  test('exist', () => {
    const index = searchLastLessThanValue(arr, 3)
    expect(index).toBe(4)
  })
  test('more than', () => {
    const index = searchLastLessThanValue(arr, 4)
    expect(index).toBe(5)
  })
  // 找不到目标元素
  test('no exist', () => {
    const index = searchLastLessThanValue(arr, 0)
    expect(index).toBe(-1)
  })
})
