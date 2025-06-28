let x =1226;
let arr =[];
let i=0;
while(x>0){
arr[i]=x%10;
x=Math.floor(x/10);
i++;
}

let arrcopy = arr.slice().reverse();
console.log(arrcopy);//1214
console.log(arr);

let k=0;
for (let i=0;i<arr.length;i++){
    //console.log(arr[i],arrcopy[i]);
      if(arr[i]!=arrcopy[i]){
        console.log("Not a palindrome");
        k='a';
        break;
    }
}

if(k!='a'){
    console.log("palindrome");
}