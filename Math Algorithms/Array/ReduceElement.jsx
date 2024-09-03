// write a function to make array.reducer() that takes an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

const reduce = (nums, fn, init) => {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
};

// Big O: O(n)
const nums = [1, 2, 3, 4];
const sum = (accum, curr) => accum + curr;
console.log(reduce(nums, sum, 10));
