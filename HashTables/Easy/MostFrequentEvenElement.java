package HashTables.Easy;

/*
2404. Most Frequent Even Element

Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1.

*/


    
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class MostFrequentEvenElement {

  public int mostFrequentEven(int[] nums) {
    Map<Integer,Integer> map = new HashMap<>();
    int max=1;
    int[] myArray=new int [nums.length];
    Arrays.fill(myArray,0);
   if(Arrays.equals(nums, myArray)){
      return 0;
      }
    for(int i=0;i<nums.length;i++){
      if(nums[i]%2==0){
        if(map.containsKey(nums[i])){
          map.put(nums[i], map.get(nums[i])+1);
          if(max < map.get(nums[i])){
            max=map.get(nums[i]);
          }
        }else{
          map.put(nums[i], 1);
        }
      }
    }

    List<Integer> res = new ArrayList<>();
      
    for(int num: nums){
      if(map.containsKey(num) && map.get(num)==max){
        res.add(num);
      }
    }
    Integer arr[] = new Integer[res.size()];
    res.toArray(arr);
    Arrays.sort(arr);
    return arr.length==0? -1:arr[0];
  }
  public static void main(String[] args){

    System.out.println("");
   }
}