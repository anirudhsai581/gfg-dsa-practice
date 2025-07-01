let arr = [1, 2, 0, 4, 3, 0, 5, 0];
//naive approach function named naiveMovezeroes
//creatting a temp array then we iterate over original array and push all the non zero elements in to this 
//and to match the original array length we push remaining elements with "0's"
function naiveMoveZeroes(arr){
  
  let temp=[];
  let j=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      temp[j++]=(arr[i]);
    }
  }
  while(j<arr.length){
    temp[j++]=(0);
  }
  console.log(temp.join(' '));
}
naiveMoveZeroes(arr);

//Better approach but with two iterations -betterMoveZeroes
//we have a count variable initialised to zero;
//we iterate over the array once and when ever we find non-zero element we replace arc
function betterMoveZeroes(arr){
  let count =0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr[count++]=arr[i];
    }
  }
  while(count<arr.length){
    arr[count++]=0;
  }
  console.log(arr.join(' '));
}
betterMoveZeroes(arr);

//Best approach with single iteration - bestMoveZeroes
//same as better approach but we are swapping whenever we encounter the non zero element in arr[i] with arr[count]
//this will ensure all zeroes if encountered will be moved to the end

function bestMoveZeroes (arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[count],arr[i]]= [arr[i],arr[count]];
            count++;
        }
    }
    console.log(arr.join(' '));
}
bestMoveZeroes(arr);