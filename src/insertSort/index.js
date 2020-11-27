function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i]
    let z = i - 1
    for (let j = z; j >= 0; j--) {
      z = j
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[z + 1] = value
  }
  return arr
}

// const arr = [-1, 11, 4, 1, 2, 4, 8, 0, 5, 6, 6, 7]
//
// console.log(insertSort(arr))

module.exports = insertSort