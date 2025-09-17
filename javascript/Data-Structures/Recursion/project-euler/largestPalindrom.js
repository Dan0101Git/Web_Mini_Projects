function isPalindrome(n){
let numberArr=n.toString().split("");
let first=0;
let last=numberArr.length-1;
let flag=0;
while(first<=last && !flag)
{
if(numberArr[first]!=numberArr[last])
    flag=1;
    first++;
    last--;
}
return !flag;
}
function largestPalindrome(a=999,b=1000,c=0){
    let product=a*b;
let isNumberPalindrome=isPalindrome(product);
console.log(a,b,c)

if(isNumberPalindrome)
{
    return product;
}
if(b===10)
{
    return "no palindrome found";
}

if(b%10!=0)
{
    if(a%10===0)
    {
        a--;
        b=a;
    }
return largestPalindrome(a,b-1,c+1);
}

else if(a%10!=0 && b%10===0)
{

    return largestPalindrome(a-1,999,c+1);
}

}
console.log(largestPalindrome());