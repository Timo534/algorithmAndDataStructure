function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i], minIndex = i, minValue = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
        minValue = arr[j]
      }
    }
    arr[i] = minValue
    arr[minIndex] = temp
  }
  return arr
}

// const arr = [-1, 11, 4, 1, 2, 4, 8, 0, 5, 6, 6, 7]
//
// console.log(selectSort(arr))

module.exports = selectSort