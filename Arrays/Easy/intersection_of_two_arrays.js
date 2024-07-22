// 349. Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their 
// intersection
// . Each element in the result must be unique and you may return the result in any order.

let intersection = function(nums1, nums2) {
    if(nums2 === undefined){
        return nums1
    }
    let set1 = new Set(nums1);
    let set2= new Set(nums2);
    let res= [...set1].filter((num)=> set2.has(num));
    return [...res];

};
