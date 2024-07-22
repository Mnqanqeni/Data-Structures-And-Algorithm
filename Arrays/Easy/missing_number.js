
// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

// This solution make use of the sum sum of natural number, then you minus the actual sum.

let missingNumber = function(nums) {
    let n=nums.length;
    return (n+1)*(n/2)-nums.reduce((sum,val) => sum+val);
};