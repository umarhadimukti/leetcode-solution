const twoSum = (nums: number[], target: number) =>
{
    // definisiin map untuk nampung complement
    const myMap = new Map<number, number>();

    // loop nums
      for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // 9,7,6,5,2

        if (myMap.has(complement) ) {
            return [myMap.get(complement), i];
        }

        myMap.set(nums[i], i);
        // [1, 0]
        // [3, 1]
        // [4, 2]
        // [5, 3]
        // [8, 4]
        // [2, ]
    }
}

const myNums: number[] = [1,3,4,5,8,2];
console.log(twoSum(myNums, 10));