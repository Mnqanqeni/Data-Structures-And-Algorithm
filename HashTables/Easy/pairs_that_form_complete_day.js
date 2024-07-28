/*3184. Count Pairs That Form a Complete Day I

Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.

A complete day is defined as a time duration that is an exact multiple of 24 hours.

For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

Approach: Here, the key is to store the frequency of each element, while checking if the is a compliment,
then if the is a complement, update count.
*/
let countCompleteDayPairs1 = function(hours) {
    let map = new Map();
    let count=0;
    for(let i=0;i<hours.length;i++){
        let complementValue=(24-(hours[i]%24))%24
        if(map.has(complementValue)){
            count=count + map.get(complementValue);
            if(map.has(hours[i]%24)){
                map.set(hours[i]%24,map.get(hours[i]%24)+1);
            }else{
                map.set(hours[i]%24,1);
            }
            
            
        }else{
            if(map.has(hours[i]%24)){
                map.set(hours[i]%24,map.get(hours[i]%24)+1);
            }else{
                map.set(hours[i]%24,1);
            }
        }
    }
    return count;
};

// Revised version:

let countCompleteDayPairs2 = function(hours) {
    let map = new Map();
    let count = 0;

    for (let i = 0; i < hours.length; i++) {
        let remainder = hours[i] % 24;
        let complement = (24 - remainder) % 24;

        if (map.has(complement)) {
            count += map.get(complement);
        }

        if (map.has(remainder)) {
            map.set(remainder, map.get(remainder) + 1);
        } else {
            map.set(remainder, 1);
        }
    }

    return count;
};