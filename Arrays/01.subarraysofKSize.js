function reverseInGroups(arr, k) {
        // code here
        let n=arr.length;
        
        
        function reverse(arr,l,r){
            while(l<r){
                [arr[l],arr[r]] =[arr[r],arr[l]];
                l++;r--;
            }
            return arr;
        }
        
        if(k>=n){
             reverse(arr,0,n-1);
        }
        return arr;
    }
    let arr=[1,2,3,4,5] ;let k=5;
   console.log(reverseInGroups(arr,k)); 