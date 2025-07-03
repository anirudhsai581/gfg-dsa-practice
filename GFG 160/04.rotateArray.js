/*
qn:Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

Note: Consider the array as circular.

constraints
1 <= arr.size(), d <= 10**5
0 <= arr[i] <= 10**5
Expected Complexities :Time Complexity: O(n)   Auxiliary Space: O(1)
*/


let arr1=[1,2,3,4,5,6];
let arr2=[1,2,3,4,5,6];
let arr3=[1,2,3,4,5,6];
let arr4=[1,2,3,4,5,6];
let d=9;

//Naive approach :rotating by one position and repeating this  for d times
//time complexity : O(n*d); space complexity : O(1)
function naiveRotateArray(arr,d){
    let n=arr.length
    for(let i=0;i<d;i++){
        let first=arr[0];
      for(let j=0;j<n-1;j++){
        arr[j]=arr[j+1];
       }
       arr[n-1]=first;
    }
    return arr;
};
console.log(naiveRotateArray(arr1,d));

//better approach using temporary array,notice d can be larger than n , so we take mod 
//Time complexity : O(n) space Complexity :O(n);
function betterRotateArray(arr,d){
   
    let temp=[]; let n=arr.length;
     if(d>n){
        d=d%n;
    }
    for(let i=0;i<n-d;i++){
        temp[i]=arr[i+d];
    }
    for(let i=n-d;i<n;i++){
        temp[i]=arr[i-(n-d)];
    }
    //copying temp to original array 
    for (let i = 0; i < n; i++){
        arr[i] = temp[i];
    }
    return arr;
}
console.log(betterRotateArray(arr2,d));

//Expected approach 1 - Using juggling algorithm
//d=d%n(reducing d if greater than n)
//we find gcd(d,n) these many equal size chunks the array needs to be divided
//i + d) % n → (i + 2d) % n → (i + 3d) % n → ...(i+kd)%n this way we are travelling in one cycle, we will move these first like 
//[1,2,3,4,5,6,7,8,9] ,d=3, we will move on positions 0,3,6,9(9%3==0) which means again reached index 0 , we will stop when we reach the starting point i.e i
//((i+kd) %n )==i implies kd % n==0; kd is multiple of n , smallest such k will be n/gcd(n,d)
//if each cycle or set has n/gcd(n,d) then no.of sets will be (n/ (n/gcd(n,d))) equals gcd(n,d) sets.
//https://www.youtube.com/watch?v=utE_1ppU5DY&list=LL&index=1&t=746s&pp=gAQBiAQB : watch this for visualisation
function bestJugglingRotateArray(arr,d){
    let n=arr.length;
    d=d%n; //if d>n we can reduce d

    let sets = gcd(n,d);
    for(let i=0;i<sets;i++){
        let startele=arr[i];
        let currIdx=i;
        let nextIdx =(currIdx + d) % n;

         while(nextIdx!==i){
       
            arr[currIdx] = arr[nextIdx];
            currIdx = nextIdx;
            nextIdx = (currIdx + d) % n;
    }
     arr[currIdx] = startele;
    }
            function gcd(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
        return arr;
   
}
console.log(bestJugglingRotateArray(arr4,d));

//Expected approach 2 - reversal approach
//By observation the rotation by d is same as reversing the individual chunks (0 to d-1)( d to n-1) and then reversing entire thing
 //[1,2,3,4,5,6]   -> [2,1,6,5,4,3] reversewhole ://[3,4,5,6,1,2]     or visualise whole reverse then reversing the chunks//[6,5,4,3,2,1]
function bestRotateArrayReversal(arr,d){
    let n =arr.length;
    d=d%n;
   
    reversal(arr,0,d-1);
    reversal(arr,d,n-1);
    reversal(arr,0,n-1);

    function reversal(arr,start,end){
        while(start<end){
            [arr[start],arr[end]]= [arr[end],arr[start]];
            start+=1; end-=1;
        }
        return arr;
    }
    return arr;
}
console.log(bestRotateArrayReversal(arr3,d));
