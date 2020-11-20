const searchEqualValu = require('../index')

describe('test searchEqualValu', () => {
  const arr = [1, 2, 3, 3, 3, 4, 5, 6]
  test('exist', () => {
    const index = searchEqualValu(arr, 3)
    expect(index).toBe(2)
  })
  test('no exist', () => {
    const index = searchEqualValu(arr, 7)
    expect(index).toBe(-1)
  })
})