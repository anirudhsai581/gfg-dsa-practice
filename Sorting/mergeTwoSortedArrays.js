   /*
Given two sorted arrays arr1[] of size N and arr2[] of size M. Each array is sorted in non-decreasing order. Merge the two arrays into one sorted array in non-decreasing order without using any extra space.
Input:
N = 4, M = 5
arr1[] = {1, 3, 5, 7}
arr2[] = {0, 2, 6, 8, 9}
Output: 0 1 2 3 5 6 7 8 9
Constraints:
1 <= N, M <= 5*10**4
0 <= arr1i, arr2i <= 10**6

   */
   //Naive approach is to use extra array of size M+N but the problem is to merge sorted arrrays in place so even though this works this is not valid solution as per qn.
   //we take arr3 of size(M+N),we parallely iterate arr1 and arr2 whicherver element is smaller that we push and move forward until one of the array is iterated completely, then we comeout of while loop, so whichever array iteration is not completed for that we enter one more while loop and simply push all the remaining elements in to result array arr3 , then we push the result back into arr1 and arr2 .

   //T.C O(N+M) to copy all into arr3, and then O(N+M) to copy back into respective arrays, so overall O(N+M). S.C is O(N+M).
   
   let arr1=[1 ,3, 5, 7];
    let arr2=[0 ,2, 6, 8, 9];
    let arr3=[];
    let N=4,M=5;
 function merge(arr1, arr2, N, M) {
        // your code here
        let i=0;let j=0;let arr3=[];
        while(i<N && j<M){
            if(arr1[i]<arr2[j]){
                arr3.push(arr1[i]);i++;
            }
            else{
                arr3.push(arr2[j]);
                j++;
            }
        }
        while(i<N){ arr3.push(arr1[i]);i++;}
        while(j<M){arr3.push(arr2[j]);j++;}
        for(let i=0;i<N;i++){
            arr1[i]=arr3[i];
        }
        for(let i=0;i<M;i++){
            arr2[i]=arr3[N+i];
        }
    }
    // merge(arr1,arr2,N,M);
console.log(arr1);
console.log(arr2);

//Optimal approach -1 : To use something like two pointers , we take two pointers one pointing two last element of first array and another pointing to first element of second array then we swap till we find left pointer element is bigger than right once its not we can break as these are sorted all further comparision will also be left element <right  ,so we can break, then we have all elements needed in left array and right array but not in sorted order,so sort both arrays .
// we can do this using JS library fucntion sort(which uses timsort and T.C is O(NlogN+MlogM)) for both the arrays sorting and while loop time complexity is O(min(N,M)).So total is O(min(N,M)+NlogN+MlogM);
//  Space complexity is O(1);
function mergeOptimal(arr1,arr2,N,M){
let left =N-1;let right =0;
while(left>=0 && right<M){
    if(arr1[left]>arr2[right]){
        [arr1[left],arr2[right]]=[arr2[right],arr1[left]];
        left--;right++;
    }
    else{
        break;
    }
}
}
// mergeOptimal(arr1,arr2,N,M);
// arr1.sort((a,b)=>a-b);
// arr2.sort((a,b)=>a-b);
// console.log(arr1);
// console.log(arr2);

/* Optimal approach2 : using gap method (of shell sort)
we take gap=ceil((N+M)/2) then we swap elements at gap distance , first pointer left points to first array start ,and right pointer gap away from first ,so in each iteration of a gap we check if arr[left]is less than arr[right] if not we swap and left++,right =left+gap, and once right pointer moves outofbounds (of combined array length) we stop,we reduce gap and this continues till gap is 1, 
think of this in terms of combined array when we are swapping , and when we are in array 2 to access elements correctly we remove -N from the index, as we are traversing interms of combined array lengths.
*/
//T.C is   for while loop where gap is divided by 2 it is log(n+m) base2 innerloop at max travelling O(n+m) so total is O(log(n+m)*(n+m)). 
//S.C is O(1)
function mergeOptimal2(arr1,arr2,N,M){
let len=(N+M);
let gap =Math.ceil(len/2);
while(gap>0){
let left=0; let right=left+gap;
  while(right<len){
    //we can have three cases of left and right:
    //1. one is left is in arr1 and right is in arr2
     if(left<N && right>=N){
        if(arr1[left]>arr2[right-N]){
            [arr1[left],arr2[right-N]]=[arr2[right-N],arr1[left]];
        }
     }
     //2.both are in second array part , so we can simply check if left is>=N which means left is in second part then obviously right will also be in second part
     else if(left>=N){
       if(arr2[left-N]>arr2[right-N]){
        [arr2[left-N],arr2[right-N]]=[arr2[right-N],arr2[left-N]];
       }
     }
     //3.if both left and right are in first array .
     else{
         if(arr1[left]>arr1[right]){
            [arr1[left],arr1[right]]=[arr1[right],arr1[left]];
         }
     }
     left++;right++;    
  }
  if(gap==1){break};
     gap=Math.ceil(gap/2);
     
}
}
mergeOptimal2(arr1,arr2,N,M);
console.log(arr1);
console.log(arr2);