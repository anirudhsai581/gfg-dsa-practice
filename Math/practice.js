let n = 17851254;
let digits = n === 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1;
console.log(digits);