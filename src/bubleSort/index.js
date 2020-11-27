function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    for (let j = 0; j < arr.length - i; j ++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        flag = true
      }
    }
    if (!flag) break
  }
  return arr
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


// const arr = [-1, 11, 4, 1, 2, 4, 8, 0, 5, 6, 6, 7]
//
// console.log(bubleSort(arr))

module.exports = bubleSort