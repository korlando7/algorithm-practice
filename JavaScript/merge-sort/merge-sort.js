const merge = (left, right) => {
  let i = 0;
  let j = 0;

  const tempArr = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      tempArr.push(left[i]);
      i += 1;
    } else {
      tempArr.push(right[j]);
      j += 1;
    }
  }


  while (i < left.length) {
    tempArr.push(left[i]);
    i += 1;
  }

  while (j < right.length) {
    tempArr.push(right[j]);
    j += 1;
  }

  return tempArr;
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, mid);
  const rightSide = arr.slice(mid);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
};


module.exports = mergeSort;
