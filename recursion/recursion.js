function printnum(n){
    if(n==0){
        return 1;
    }
    printnum(n-1);
    console.log(n);
}
printnum(10);