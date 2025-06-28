function fact(n){
    let ans ;
    if (n==0){
        return 1;
    }
    ans =  n*fact(n-1);
    return ans;
}
console.log(fact(5));