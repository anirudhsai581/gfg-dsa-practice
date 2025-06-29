function power (n,p){
    let ans=1;
   
while(p>0){
    if(p%2 ==0){
        
        n*=n;
    }

     else{
        ans=ans*n;
        n*=n;
        
     }
     p=Math.floor(p/2);
}
return ans;

}

console.log(power(2,8));