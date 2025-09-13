function sumOfMultiples(x,...multiples){
    let n=x-1;
    if(n===1)
    return 0;
let product=multiples[0]*multiples[1];
if(n%multiples[0]===0 || n%multiples[1]===0 || n%product===0)
    return n+sumOfMultiples(n,multiples[0],multiples[1]);
return sumOfMultiples(n,multiples[0],multiples[1]);
}

console.log(sumOfMultiples(1000,3,5));