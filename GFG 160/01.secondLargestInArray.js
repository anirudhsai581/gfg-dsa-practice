    function getSecondLargest(arr) {
        // code here
        let first =-Infinity;
        let second =-Infinity;
        
        for(let i=0;i<arr.length;i++){
            
            if(arr[i]>first){
                second=first;
                first=arr[i];
                
            }
            else if ( (arr[i]>second) && (arr[i]!==first) ){
                second=arr[i];
            }
        }
        if(second==(-Infinity)){
            return -1;
        }
        return second;
    }
    let arr =[1,8,55,54,55,3];
    console.log(getSecondLargest(arr));