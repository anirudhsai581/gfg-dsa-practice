

function isPrime(n){
    if(n===1){
        return false;
    }
    if(n==2 || n==3){
        return true;
    }
    if((n%2==0)||(n%3==0)){
        return false;
    }
    for(let i=5;i*i<=n;i=i+6){
        if((n%i==0) || (n%(i+2)==0)){
            return false;
        }
    }
    return true;  
}

function primeNumbers (k){
    if((k!=2 )|| (k!=3)){
        console.log(2);
        console.log(3);
    }
    for(let i=5;i<=k;i=i+6){
        if(isPrime(i)){
            console.log(i);
        }
        if(isPrime(i+2)){
            console.log(i+2);
        }
    }
}

primeNumbers(24);
