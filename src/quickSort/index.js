module.exports = function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // 中心点
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

// arr = [5, 1, 0, 3, 1, 4, 6, 7, 9]

function partition(arr, left, right) {
  let index = left + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[left]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, left, index - 1)
  return index - 1
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}