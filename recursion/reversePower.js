let rev=0;
function reverse(k){
            if(k==0){
                return;
            }
           rev=(rev*10)+(k%10);
        reverse(Math.floor(k/10));
 }
reverse(123);
console.log(rev);