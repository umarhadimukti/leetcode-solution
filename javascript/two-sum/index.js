// faster algorithm (O(n)) not brute force

function twoSum(nums, target) {

  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]]
  }

}

console.log(twoSum([4,3,2,3,5,7,2], 5))