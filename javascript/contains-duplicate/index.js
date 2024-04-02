const containsDuplicate = function(nums) {
  // sorting array
  nums.sort()
  // looping sampai nums.length-1 agar tidak out of index
  for (let i = 0; i < nums.length-1; i++) {
      // cek apakah nums[i] === nums[i+1]
      if (nums[i] === nums[i+1]) {
          return true
      }
  }
  return false
};