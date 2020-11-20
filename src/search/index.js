module.exports = function searchEqualValu (arr, target) { // target = 3
  let low = 0, high = arr.length - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] < target) {
      low = mid + 1
    } else if (arr[mid] > target) {
      high = mid - 1
    } else {
      if (mid === 0 || arr[mid - 1] !== target) return mid
      high = mid - 1
    }
  }
  return -1
}