


        

    
       function  goodReverseArray(arr) {
        // your code here
        //storing 0-> k numbers in places of n ->n+k
        //both odd and even lengths will work correctly without any explicit handling
        //when n is odd middle number will be inplace all before it will be swapped with all after it
        //when n is even first half numbers will be swapped with second half
        let n=arr.length;
        let a=0;
        for (let i=0;i<Math.floor(n/2);i++){
            a=arr[n-1-i];
            arr[n-1-i]=arr[i];
            arr[i]=a;
        }
        return arr;
    }

    function bestReverseArray(arr){
         let left=0;
        let right=arr.length-1;
              while(left<right) {
                  [arr[left],arr[right]] =[arr[right],arr[left]];
                  left++;right--;
              }  
              return arr;     
        
            }
    
    
    let arr1=[1,2,3,4,5,6,7];
     let arr2=[1,2,3,4,5,6,7];

    console.log(goodReverseArray(arr1));
    console.log(bestReverseArray(arr2));