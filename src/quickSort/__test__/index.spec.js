const quickSort = require('../index')

// 查找第一个值等于给定值的元素
describe('test quickSort', () => {
  const arr = [11, 2, 4, 6, 8, 20, 1, 5]
  test('sort1', () => {
   
    console.log(quickSort(arr))
  })
})