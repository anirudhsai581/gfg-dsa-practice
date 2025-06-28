//naive approach

/*function lcmNaive(a,b){
  let num = Math.max(a,b);
  for(let i=num ; ;i++){
       if((i%a==0) && (i%b==0)){
        console.log(`The LCM of ${a} & ${b} is ${i}`);
        break;
       }
    }
}
lcmNaive(8,12);*/
function lcm(a,b) {
   let prod =a*b;
    function gcd(a,b){
        if(b==0){
            return a;
        }
        else{
            return gcd(b,a%b);
        }
    }
    let g =gcd(a,b);
    return prod/g ;
}
console.log(lcm(8,12));