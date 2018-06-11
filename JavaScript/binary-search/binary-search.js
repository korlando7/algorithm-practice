const binarySearch = (arr, key) => {
  if (arr.length < 2) {
    if (arr[0] === key) return true;
  } else if (key < arr[0] || key > arr[arr.length - 1]) {
    return false;
  } else if (key === arr[0] || key === arr[arr.length - 1]) {
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

module.exports = binarySearch;
