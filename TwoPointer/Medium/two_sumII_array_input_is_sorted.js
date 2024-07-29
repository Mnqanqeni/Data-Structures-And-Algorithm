/*
167. Two Sum II - Input Array Is Sorted
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Approach: This is very easy when you understand the two pointers technique,
notice that i increases the value but j decreases the value, the you draw your logic
from there.
*/


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length-1;
    let res=0;
    while(j>i){
        res=numbers[i]+numbers[j];
        if(res===target){
            return [i+1,j+1];
        }else if(res>target){
            j--;
        }else{
            i++;
        }
    }

};
