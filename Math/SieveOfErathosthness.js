function sieve(n){
let array=[];
for(let i=2;i<=n+1;i++){
    array[i]=true;
}
let isprime = array.slice();

for(let i=2;i*i<=n;i++){
    if(isprime[i])
        {
            for(let j=2*i;j<=n;j=j+i){
                isprime[j]=false;
            }
        }
}
for(let i=2;i<=n;i++){
    if(isprime[i]){
    console.log(i);
    }
}
}
sieve(20);
