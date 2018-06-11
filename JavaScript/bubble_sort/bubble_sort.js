const bubbleSort = (arr, n) => {
  if (n < 1) {
    return arr;
  }
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const tmp = arr[i];
      arr[i] = arr[i + 1]
      arr[i + 1] = tmp;
    }
  }
  return bubbleSort(arr, n - 1);
};

const arr = [4, 6, 7, 8, 3, 2, 4, 6, 7];

console.log(bubbleSort(arr, arr.length));