
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

let  majorityElement = function(nums) {
    const myMap= new Map()
    
    for(let i=0;i<nums.length;i++){
       
        if(myMap.has(nums[i].toString())){
            myMap.set(nums[i].toString(),myMap.get(nums[i].toString())+1)
        }else{
           
            myMap.set(nums[i].toString(),1);
        }
    }
    let res1=myMap.get(nums[0].toString());
    let res2=nums[0].toString();

    for(const [key, values] of myMap){
        if(values>res1){
            res1=values;
            res2=key;
        }
    }
    return res2;
};


// second method after revised other people's answers. Notice that the majority element will
// always be n/2  of them , the means we will definitely find it at position n/2.

let majorityElement2= function(nums){
    nums.sort();
    return nums[Math.floor(Math.floor(nums.length/2))]
}