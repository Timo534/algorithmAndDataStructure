module.exports = {
  // 查找第一个值等于给定值的元素
  searchEqualValue: function (arr, target) {
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
  },
  // 查找最后一个值等于给定值的元素
  searchLastEqualValue: function (arr, target) {
    let low = 0, high = arr.length - 1
    while (low <= high) {
      let mid = low + ((high - low) / 2 >> 1)
      if (arr[mid] < target) {
        low = mid + 1
      } else if (arr[mid] > target) {
        high = mid - 1
      } else {
        if (mid === arr.length - 1 || arr[mid + 1] !== target) return mid
        low = mid + 1
      }
    }
    return -1
  },
  // 查找第一个大于等于给定值的元素
  searchMoreThanValue: function (arr, target) {
    let low = 0, high = arr.length - 1
    while (low <= high) {
      let mid = low + ((high - low) / 2 >> 1)
      if (arr[mid] < target) {
        low = mid + 1
      } else {
        if (mid === 0 || arr[mid - 1] < target) {
          return mid
        }
        high = mid - 1
      }
    }
    return -1
  },
  // 查找最后一个小于等于给定值的元素
  searchLastLessThanValue: function (arr, target) {
    let low = 0, high = arr.length - 1
    while (low <= high) {
      let mid = low + ((high - low) / 2 >> 1)
      if (arr[mid] > target) {
        high = mid - 1
      } else {
        if (mid === arr.length - 1 || arr[mid + 1] > target) {
          return mid
        }
        low = mid + 1
      }
    }
    return -1
  }
}