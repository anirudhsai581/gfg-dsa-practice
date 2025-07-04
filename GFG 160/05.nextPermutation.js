/*
Given an array of integers arr[] representing a permutation (i.e., all elements are unique and arranged in some order), find the next lexicographically greater permutation by rearranging the elements of the array.
If such a permutation does not exist (i.e., the array is the last possible permutation), rearrange the elements to form the lowest possible order (i.e., sorted in ascending order).
Input: arr[] = [2, 4, 1, 7, 5, 0]   Output: [2, 4, 5, 0, 1, 7]

*/


//naiveapproach: finding all permutations and storing in an array and sort all of them, then  identify the position of the current and return the next

function genPermutation(res,arr,idx){
    if(idx==arr.length-1){
        res.push([...arr]);
        return ;
    }

    for(let i=idx;i<arr.length;i++){
        [arr[idx],arr[i]]=[arr[i],arr[idx]];
        genPermutation(res,arr,idx+1);
        [arr[idx],arr[i]]=[arr[i],arr[idx]];
    }
    
}
function naiveNextPermutation(){
      let res = [];
      genPermutation(res,arr,0)


        res.sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }
        return 0;
    });


    for (let i = 0; i < res.length; i++) {

        // If current permutation matches input
        let match = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] !== res[i][j]) {
                match = false;
                break;
            }
        }

        if (match) {

            // If it's not the last permutation
            if (i < res.length - 1) {
                for (let j = 0; j < arr.length; j++) {
                    arr[j] = res[i + 1][j];
                }
            }

            // If it's the last permutation
            else {
                for (let j = 0; j < arr.length; j++) {
                    arr[j] = res[0][j];
                }
            }

            break;
        }
    }
}
let arr=[2, 4, 1, 7, 5, 0];
(naiveNextPermutation(arr));
console.log(arr.join(" "));


//best approach : finding the pivot element which is first decreasing element from right end iteration 
// we find first element which is smaller than its right , so from here we consider this pivot and next permutation will have all elements before this same and this will be swapped with element just next bigger than this among elements present to its right(we can find the next bigger by travesring from right and finding the first bigger element than this as we know all the next elements to pivot are in ascending order)



function bestNextPermutation(arr){
    let n=arr.length;
    let pivot=-1;
    for(let i=n;i>0;i--){
        if(arr[i]>arr[i-1]){
            pivot=i-1;
            break;
        }
    }
    if(pivot ==-1){
        return arr.reverse();
    }

    for(let i=n-1;i>pivot;i--){
        if(arr[i]>arr[pivot]){
            [arr[i],arr[pivot]]=[arr[pivot],arr[i]];
            break;
        }
    }

    reverse(arr,pivot+1,n-1);
    return arr;

    function reverse(arr,start,end){
           while(start<end){
            [arr[start],arr[end]] =[arr[end],arr[start]];
            start++,end--;
           }
           return arr;
    }

}

let arr2=[2, 4, 1, 7, 5, 0];
console.log(bestNextPermutation(arr2));