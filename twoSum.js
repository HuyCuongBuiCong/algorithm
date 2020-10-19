// Link: https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const [left, right] = findValues(nums, target);
    return [nums.indexOf(left), nums.lastIndexOf(right)];
};

const findValues = (nums, target) => {
    const sortedNums = [...nums].sort((a, b) => a - b);
    let leftCursor = 0;
    let righCursor = nums.length;
    while (righCursor > 0){
        righCursor -= 1; 
        leftCursor = 0;
        let leftValue =  sortedNums[leftCursor];
        let rightValue =  sortedNums[righCursor] 
        while(leftCursor < righCursor  && leftValue <= (target -  rightValue )){
            leftValue =  sortedNums[leftCursor];
            if(leftValue + rightValue == target){
                return [leftValue,  rightValue];
            }
            leftCursor +=1;
        }
    }
    return [0,0];
}

