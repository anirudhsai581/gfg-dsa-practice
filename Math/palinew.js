


function isPalindrome(x){

let rev =0;
let digit= 0;
    let num =x;
while(x>0){
    digit = x%10;
    rev = rev*10+ digit;
    x=Math.floor(x/10);
}
console.log(rev);

if(num==rev){
   console.log("its palindrome");
}
else{
    console.log("not a palindrome");
}
}
isPalindrome(120121);
