import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 */

public class PascalsTriangle2 {

    public List<Integer> getRow(int rowIndex)  {
        List<List<Integer>> myArray= new ArrayList<>();
        if(rowIndex < 0){
            return new ArrayList<Integer>();
        }
        myArray.add(Arrays.asList(1));
        if(rowIndex == 0){
            return myArray.get(0);
        }

        List<Integer> prev = new ArrayList<>();
        prev.add(0);
        prev.add(1);
        prev.add(0);

        for(int i=1;i<=rowIndex;i++){
            List<Integer> row = new ArrayList<>();

            for(int j=0;j<=i;j++){
                row.add(prev.get(j) + prev.get(j+1));
            }
            myArray.add(row);
            prev.clear();
            prev.add(0);
            prev.addAll(row);
            prev.add(0);
    }
    return myArray.get(rowIndex);
}
}
