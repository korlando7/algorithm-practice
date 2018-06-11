const assert = require('assert');

const mergeSort = require('./merge-sort');


describe('Merge Sort', () => {
  it('should pass', () => {
    const unsorted = [9, 5, 3, 7, 6, 4, 3, 2, 7, 8, 1];
    const sorted = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9];
    assert.deepStrictEqual(mergeSort(unsorted), sorted);
  });

  it('should handle 1000 iterations without failing - stress testing', () => {
    const randNum = Math.floor(Math.random() * 101);

    for (let i = 0; i < 1000; i += 1) {
      const arr = [];
      for (let j = 0; j < randNum; j += 1) {
        arr.push(Math.floor(Math.random() * randNum));
      }
    }
  });
});
