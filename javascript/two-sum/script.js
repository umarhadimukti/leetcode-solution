// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [nums[i], nums[j]];
//       }
//     }
//   }
// }

// console.log(twoSum([1, 3, 4, 5, 6, 7, 9], 16));

//? without es6 syntax
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([1, 3, 4, 5, 6, 7, 9], 11));


//! within es6 syntax
const twoSumArrOfInt = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }
}
console.log(twoSumArrOfInt([1,3,4,5,63,6,4,7], 4))

const isTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j]
      } 
    }
  }
}

console.log(isTwoSum([3,4,5,6,3,44,56], 7))