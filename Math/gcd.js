let a=45,b=18;

function gcd(a,b){
 let ans =Math.min(a,b);
for(let i=ans; i>0;i--){

 if((b%i==0) && (a%i==0)){
    return i;
 }
}
}
console.log(gcd(13,7));