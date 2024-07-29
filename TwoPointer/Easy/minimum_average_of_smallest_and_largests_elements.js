/*
3194. Minimum Average of Smallest and Largest Elements

You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

You repeat the following procedure n / 2 times:

Remove the smallest element, minElement, and the largest element maxElement, from nums.
Add (minElement + maxElement) / 2 to averages.
Return the minimum element in averages.

 

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
let minimumAverage = function(nums) {
    let averages=[];
    nums.sort((a,b)=>a-b)
    let i=0;
    let j=nums.length-1;
    while(j>i){
        averages.push((nums[i]+nums[j])/2);
        j--;
        i++;
    }
    averages.sort((a,b)=>a-b);
    return averages[0];
};