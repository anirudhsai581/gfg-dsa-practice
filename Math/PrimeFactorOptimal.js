let n =12;
function primeFactors(n){

    if(n<=1)
        return;

   while(n%2==0){console.log(2);n=n/2;}
   while(n%3==0){console.log(3);n=n/3;}
   
    for(let i=5;i*i<=n;i=i+6){
        
        while(n%i==0){
            console.log(i);
            n=n/i;  
        }
        while(n%(i+2)==0){
            console.log(i);
            n=n/i+2; 
        }
    }
    if(n>3){
        console.log(n);
}

}
primeFactors(481230);
