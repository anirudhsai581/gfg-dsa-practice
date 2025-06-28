let x = 9375;
let count =0;
if(x<10){
    console.log(`The number of digits in x are : 1`);
}
while(x>9){
x = Math.floor(x/10); //(937-1)(93 ,2)(9 ,2)
count++; 

}
console.log(`The number of digits in x are : ${count+1}`);
