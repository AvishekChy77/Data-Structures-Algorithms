// without the array.filter method write a function that takes an integer array "arr" and a filtering function fn.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]

const filter = (arr, fn) => {
  let filtered = [];
  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
};

// Big O: O(n)
const fn = function greaterThan10(n) {
  return n > 10;
};
const arr = [5, 12, 4, 51, 9];
console.log(filter(arr, fn));
