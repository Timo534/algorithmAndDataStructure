module.exports = function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // 中心点
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
}

// arr = [5, 1, 0, 3, 1, 4, 6, 7, 9]

function partition(arr, left, right) {
  let index = left + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[left]) {
      [ arr[i], arr[index] ] = [ arr[index], arr[i] ]
      index++
    }
  }
  [ arr[left], arr[index - 1] ] = [ arr[index - 1], arr[left] ]
  return index - 1
}
