/*
Given an array arr and an element k. The task is to find the count of elements in the array that appear more than n/k times and n is length of arr.
Input: arr = [3, 1, 2, 2, 1, 2, 3, 3], k = 4 Output: 2 
Explanation: In the given array, 3 and 2 are the only elements that appears more than n/k times
Input: arr = [2, 3, 3, 2], k = 3 Output: 2
Input: arr = [1, 4, 7, 7], k = 2 Output: 0
Constraints:
1 <= arr.size() <= 10**6
0 <= arr[i] <= 10**8
1 <= k <= arr.size()
Expected Complexities Time Complexity: O(n) Auxiliary Space: O(n)
*/

//optimal: space complexity :O(n), Time complexity:O(n);
function countOccurence(arr, k) {
        let n=arr.length;
        // your code here
        let map =new Map();
        let count=0;
        for(let num of arr){
            map.set(num,(map.get(num)||0)+1);
        }
       for(let [key,value] of map){
           
            if(value>Math.floor(n/k)){
                count++;
            }
       }
        
        return count;
    }
    let arr=[3, 1, 2, 2, 1, 2, 3, 3],k=4;
    console.log(countOccurence(arr,k));