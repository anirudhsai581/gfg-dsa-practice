let n = 251;


let zeroes =0;

for(let i=5;i<=n;i*=5){
 zeroes += Math.floor(n/i);
}
console.log(zeroes);
//we have found that 62 trailing zeroes will be present in 251 factorial without finding the actual factorial
//this was possible as we are finding number of 5's in 251 factorial calculation
//as we know 2*5 gives zero, and number of 5's are always less tha 2's in factorial calculation, hence we count number of 5's
//time complexity O(log n base 5) also O(log n), can be found as we are doing this 5**1, 5**2...5**k such that 5**k<=n,taking log base 5 on both sides we can get K no.of times for time complexity
