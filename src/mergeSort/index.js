function mergeSort (arr) {
  if (arr.length === 1) return arr
  let mid = arr.length >> 1
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}

module.exports = mergeSort

// let arr = [1, 5, 3, 2, 6, 1]
//
// console.log(mergeSort(arr)) // [1, 1, 2, 3, 5, 6]
