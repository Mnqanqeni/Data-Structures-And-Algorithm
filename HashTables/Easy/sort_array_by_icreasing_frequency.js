// 1636. Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

/*
To solve this problem to you need to understand comparator functions, then you simple find the
frequency of each element using the map, then you sort using the comparator.
*/

let frequencySort = function(nums) {
    let map= new Map();

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }

    nums.sort((a,b)=> {
        let getA=map.get(a);
        let getB=map.get(b)
        if(getA === getB){
            return b-a;
        }else {
            return getA - getB
        }
    });
    return nums;
};