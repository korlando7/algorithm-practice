const binarySearch = (arr, key) => {
  let found = false;

  if (arr.length < 2) {
    if (arr[0] === key) found = true;
  } else if (key < arr[0] || key > arr[arr.length - 1]) {
    return false;
  } else if (key === arr[0] || key === arr[arr.length -1]) {
    return true;
  }
  const midpoint = Math.floor(arr.length / 2);

  if (key === arr[midpoint]) {
    return true;
  } else if (key > arr[midpoint]) {
    return binarySearch(arr.slice(midpoint + 1), key);
  } else if (key < arr[midpoint]) {
    return binarySearch(arr.slice(0, midpoint), key);
  }

  return false;
};

const sortedArr = [0, 1, 2, 3, 5, 6, 7, 8, 9];

console.log(binarySearch(sortedArr, 4));