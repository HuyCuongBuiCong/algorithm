//https://leetcode.com/problems/find-peak-element/
var findPeakElement = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        const prev = nums[i - 1], next = nums[i + 1]
        if (nums[i] > prev && nums[i] > next) return i
        if (nums[i] > prev && !next || nums[i] > next && !prev) return i
    }
    return 0;
};
console.log(findPeakElement([1,2,3]))