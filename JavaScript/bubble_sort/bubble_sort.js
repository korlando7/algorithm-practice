const bubbleSort = (arr, n) => {
  if (n < 1) {
    return arr;
  }

  const arrCopy = arr;

  for (let i = 0; i < n - 1; i += 1) {
    if (arr[i] > arr[i + 1]) {
      const tmp = arr[i];
      arrCopy[i] = arr[i + 1];
      arrCopy[i + 1] = tmp;
    }
  }
  return bubbleSort(arr, n - 1);
};

module.exports = bubbleSort;
