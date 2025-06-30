// question:
// William and Jax are playing a game. The game is as follows :



// You will be given an integer n. William goes first , In each move the player will choose any factor (excluding 1 and number itself) of the current number and replace it with chosen factor. The player who will not be able to make a move will win. Both players play the game optimally.



// You have to tell which player will in the game. I William wins then output "William" else output "Jax".


// Examples:
// Input : n = 6

// Output : Jax

// Explanation :

// The factors for n = 6 are -> 2, 3. The William can choose any number and then Jax cannot make the move. So Jax wins.

// Input : n = 30

// Output : William

// Explanation :

// The factors for n = 30 are -> 2, 3, 5, 6, 10, 15. The William will choose number 6 optimally.

// The factors of 6 are 2, 3. The Jax can choose any number and then William cannot make the move. So William wins.

// Constraints:
// 1 <= n <= 10**9


// My code :
class Solution {
  
    winLose(n) {
        //your code goes here
         let count =0;
         let p;
       
       function Win(n){
        let arr=[];
        for(let i=2;i*i<=n;i++){
            if(n%i==0){
                arr.push(i);
            }
            if((i*i)!=n){
                arr.push(n/i);
            }
        }
      
        for(let i=0;i<arr.length ;i++){
            for(let j=2;j<arr[i];j++){
                if((arr[i]%j)==0){
                     n=j;
                     count++;
                    break;
                }
            }
        }

         if(p==n){
            return;
        } 
        else{
            Win(p);
        }
       }
       Win(n);
       if(count%2==0){
        return "Jax"
       }
       else{
        return "William"
       }
    }
}