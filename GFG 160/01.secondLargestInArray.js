   /*  qn:
    
    Given an array of positive integers arr[] of size n, the task is to find second largest "distinct" element in the array.
    Input: arr[] = [12, 35, 1, 10, 34, 1]  Output: 34
    
    approach 1 : sorting in non decreasing order and then finding element which is not equal to n-1 element of array.
    approach 2: Two pass search : iterating the array twice in once finding the largest element in another finding largest which is not equal to earlier largest
    approach 3: one pass search : Iterate once but we keep track of largest and second largest using two variables , if arr[i] >first then first=arr[i] and second will be assigned first 
                 and if we find any number less than first but greater than second we assign it to second
   */
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