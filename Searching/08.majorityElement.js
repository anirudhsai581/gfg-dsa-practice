/*Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.

Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.
Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
Output: 1
Input: arr[] = [7]
Output: 7
Input: arr[] = [2, 13]
Output: -1
Constraints:
1 ≤ arr.size() ≤ 10**5
1 ≤ arr[i] ≤ 10**5
Expected Complexities
Time Complexity: O(n)
Auxiliary Space: O(1)

*/


//approach 1 : using an hash array and pushing elements count to hash array over array iteration in the same iteration checking if any value pushed is greather than n/2 and returning immediately if reached if not return -1, but this will take space complexity of 10**5.(largest element of input), but we need something in O(1);

//time complexity:O(n) space complexity:10**5 , it will be O(n) if we use hash map instead of array
function  goodMajorityElement(arr) {
        // code here
        let n=arr.length;
        let hash =new Array(10**5+1).fill(0);
        for(let i=0;i<n;i++){
            hash[arr[i]]++;
            if(hash[arr[i]]>Math.floor(n/2)){
                return arr[i];
            }
        }
       return -1;
    }

    //approach 2: optimal we use a technique called Boyer-Moore Majority Vote Algorithm
    // in this we iterate array two times , in first we select a candidate , in second iteration we check if candidate is actually a majority element if not then we will be sure that there will be no other element as majority too.
    //in loop 1 we have two variables one is count and other is candidate , first we set candidate as first element, then we increase count if we find element other than candidate we decrease count and when count became 0 then in next iteration we assign the num as new candidate , this way if there is a majority candidate it will surely appear as candidate by time of loop completion, it is not necessary the candidate after first loop is definetly a majority but if a majority element exists it will appear as candidate , ex:[2,2,1,1,3,3],[2,2,1,1,4,5] here candidates are 3 and 5 respectively but they are not majority elements, so in the second iteration we check the frequency of our candidate in the array if its more than floor of (n/2) its a majority element 


    //timecomplexity :O(n) ,space complexity:O(1);


    //Important: when revising this , checkout n/3 majority variation also, its same there will be two candidates as at most 2 numbers can exist whose freq is more than n/3.

    function expectedMajorityElement(arr){
        // code here
        let n=arr.length;let candidate ;let count=0;
        for(let i=0;i<n;i++){
         if(count==0){
             candidate=arr[i];
             count++;
         }
         else if(arr[i]==candidate){
             count++;
         }
         else{
             count--;
         }
        }
        let freq=0;
        for(let num of arr){
            if(num==candidate){
                freq++
            }
        }
        if(freq>Math.floor(n/2)){
            return candidate;
        }
        else{
            return -1;
        }
    }
let arr=[1,1,2,1,2,2,2,4,5,2,2,2];
console.log(expectedMajorityElement(arr));
console.log(goodMajorityElement(arr));