
let n=10;
function factorial (n){
    let ans=1;
for(let i=1;i<=n;i++){
    ans= ans*i;
}
return ans;
}

let count =0;
let ans = factorial(n);
for (let i=0;ans>1;){
    if(ans%10===0){
       count ++;
    }
    else{
        break;
    }
    ans=ans/10;
}

console.log(`The factorial ${n} is ${factorial(n)}`);
console.log(`The trailing zeroes in  ${n} factorial is ${count}`);

