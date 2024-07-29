/*3184. Count Pairs That Form a Complete Day I

Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.

A complete day is defined as a time duration that is an exact multiple of 24 hours.

For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.
*/

public class PairsThatFormCompleteDayI{
    public int countCompleteDayPairs(int[] hours) {
        int sum=0;
        for(int i=0;i<hours.length;i++){

            for(int j=i+1;j<hours.length;j++){
                if((hours[i]+hours[j])%24==0){
                    sum+=1;
                }
            }
        }
        return sum;
    }
}
