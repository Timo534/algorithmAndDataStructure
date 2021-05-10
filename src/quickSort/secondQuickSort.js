function quickSortShell(arr) {
  function quickSort(left, right) {
    if (left >= right) return
    // 以第一个数为基准
    let temp = arr[left],
      i = left,
      j = right
    
    while (i !== j) {
      // 需要先从右边开始
      while (arr[j] >= temp && i < j) j--;
      while (arr[i] <= temp && i < j) i++;
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    [arr[left], arr[i]] = [arr[i], arr[left]]
    
    quickSort(left, i)
    quickSort(i+1, right)
  }
  
  quickSort(0, arr.length -1)
  console.log(arr)
  return arr
}

quickSortShell([1, 2, 4 ,1])
