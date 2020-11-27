function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) swap(arr, i, j)
    }
  }
  return arr
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


// const arr = [-1, 11, 4, 1, 2, 4, 8, 0, 5, 6, 6, 7]

// console.log(bubleSort(arr))

module.exports = bubleSort