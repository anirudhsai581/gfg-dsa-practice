/*Given an array arr[] of size N, find the smallest positive number missing from the array.
Input: N = 5 arr[] = {1,2,3,4,5} Output: 6
Input: N = 5 arr[] = {0,-10,1,3,-20} Output: 2
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
Constraints:
1 <= N <= 10**6
-10**6 <= arr[i] <= 10**6
*/

//Time complexity O(n),space complexity O(10**6)
//we take hash aray of 10**6 as we are looking fir positive integers, and then count all the positive number occurences in the hash array and also keep track of max and then loop through hash array till max and return the first positive number whose value in hash array is 0

//we can optimise the space as we know that the first missing positive cannot be greater than (size of array+1) think if all the numbers of array are positive(1 to n) in that case the smallest missing number is n+1. in all remaining cases it will be less than array, so we can only fill the hash array if a number is <n+2 and initiate the hash array with that size only

function goodFindMissing(arr, n) {
        // code here
        let hash = new Array ((10**6)+1).fill(0);
        let max=-1;
        
        for(let i=0;i<n;i++){
         if(arr[i]>=0){
              max=Math.max(arr[i],max);
             hash[arr[i]]++;
       }
       }
       
       if (max==0){
           return 1;
       }
       
       for(let i=1;i<=max+1;i++){
           if(hash[i]==0){
               return i;
           }
        }
}

/*

//To further optimise the space , instead of using a hash array we can use the given array and somehow mark the all integers from 1 to n-1 which will definetly contain the smallest missing positive integer.
//because:we can optimise the space as we know that the first missing positive cannot be greater than (size of array+1) think if all the numbers of array are positive(1 to n) in that case the smallest missing number is n+1. in all remaining cases it will be less than array, 
so how are we going to mark if a number is present in range of 1 to n in the array ,  since we already have negatives and they does not matter to us ,we will loop through array once and make all negatives as 0's.idea is for every k positive number in range of 1 to n, we will mark the number at index k-1, as negative ,that is why to use this we are marking already existing negatives as 0,so if its already negative 
while we are traversing the latest array with 0 and +ves , it means we have found one instance of (index+1) number already in the array , so if we encounter positives then only we make them negative , so at the end we can just loop through array and find first positive number,also if number is more than n we can just ignore it (as marking it would be accesing out of bounds and also we know our ans ranges in 1 to n+1), similarly if we encounter 0, we can skip marking (as 0-1 is out of bounds).


so we loop array three times, in first iteration we mark all negatives as 0's
in 2nd iteration, we mark all +ves in range of 1 to n if exist in array then arr[+ve number -1 ] as -ve of the number it has .
this way we are keeping track of existing number by (making it negative , we can just obtain original value back by taking abs of it), and also marking attendance for a positive number if a number is found .
in 3rd iteration we find first positive number ,like if an index has positve value it means we did not mark this index , it means there was no positive nymber found in 2nd iteration with value of this index+1 so index+1 will be missing +ve, if no missing positive found in 0 to n-1, then we have all the numbers from 1 to n in original array , so missing positive will be n+1.
*/
function bestFindMissing(arr, n) {
    for(let i=0;i<n;i++){
            if(arr[i]<0){
                arr[i]=0;
            }
        }
        for(let i=0;i<n;i++){
            if(Math.abs(arr[i])>0&&Math.abs(arr[i])<n+1){
                if(arr[Math.abs(arr[i])-1]==0){
                        arr[Math.abs(arr[i])-1]=-(arr[Math.abs(arr[i])-1]+n+1);
                }
                else if (arr[Math.abs(arr[i])-1]>0){
                    arr[Math.abs(arr[i])-1]=-(arr[Math.abs(arr[i])-1]);
                }
            }
        }
        for(let i=0;i<n;i++){
            if(arr[i]>=0){
                return i+1;
            }
        }
        return n+1;
}     

let n=5;
let arr1=[0,-10,1,3,-20];
let arr2=[0,-10,1,3,-20];
console.log(bestFindMissing(arr1,n));
console.log(goodFindMissing(arr2,n));