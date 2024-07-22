// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

//Approach:
//        This solution uses bitwise operator exclusive or, what is basically it will do all
//        numbers that are the same well result to zero, reason 9 ^ 9 ==0, but it uses binary.

int singleNumber(int* nums, int numsSize) {
    int sum=0;
    for(int i=0;i<numsSize;i++){
        sum^=*(nums +i);
    }
    return sum;
}