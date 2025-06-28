let n;

function isPrime(n){
    if(n===1){
        console.log("neither prime nor composite");
        return false;
    }
    if(n==2 || n==3){
        console.log("its prime")
        return
    }
    if((n%2==0)||(n%3==0)){
        console.log("not a prime");
        return
    }
    for(let i=5;i*i<=n;i=i+6){
        if((n%i==0) || (n%(i+2)==0)){
            console.log("not a prime");
            return ;
        }
    }
    console.log("its prime number");
    
}
isPrime(13);

