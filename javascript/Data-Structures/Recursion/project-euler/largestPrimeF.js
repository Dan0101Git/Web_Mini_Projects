function factors(n){
        let arr=[];
        let arr2=[];
    let i=2;
while(i*i<=n)
{
    if(n%i===0)
    {
        arr.push(i);
        arr2.push(n/i)
    }
    i++;
}
arr=arr.concat(arr2.reverse());
return arr;
}
function isPrime(n){
    let i=2;
while(i*i<=n)
{
    if(n%i===0)
        return false
    i++;
}
return true;
}
function larPF(n,factorArr=factors(n)){

if(factorArr.length===0)
    return n;

let number=factorArr.pop();

if(isPrime(number))
            return number;

return larPF(number,factorArr);

}
console.log(larPF(91));