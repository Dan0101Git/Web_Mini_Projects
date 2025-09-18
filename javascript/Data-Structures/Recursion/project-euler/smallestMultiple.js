function getPrimeFactors(n){
            let arr=[];
        let newArr=[];
            let pow2=findPow([],n); 
    let i=2;
    if(isPrime(n))
        return [n];
    if(pow2.no)
        return pow2.arr

while(i<=n/2)
{
    if(n%i===0)
    {
        if(isPrime(i))
            arr.push(i);
        else{
            let pow=findPow(arr,i);       
  
             if(pow.no){
              
                        arr.splice(pow.index,pow.c,...pow.arr);
             }
       else 
       newArr=getPrimeFactors(i)
       newArr.forEach((no)=>{
        if(!arr.includes(no))
            arr.push(no);
       })
            }

    }
    i++;

}
return arr;
}

function findPow(arr,i){
    let a;
    let ind;    let counter;
    let c=0;
    let newArr=[];
    if(arr.length===0)
    {
        for(let j=2;j<=i/2;j++)
        {
             if(isPow(j,i)){
        counter=isPow(j,i);
                a=j;
   c++;
   break;
    }

        }
    }
    else{arr.forEach((no,index)=>{
    
    if(isPow(no,i)){
        counter=isPow(no,i);
                a=no;
    ind=index;
   c++;
    }

})}
for(let i=0;i<counter;i++)
{
    newArr.push(a)
}
return {no:a,index:ind,counter,arr:newArr,c}
}
function isPow(n,i,counter=0){
    let pow;
    if(i===n)
    {counter++;
                return counter;
    }
if(i%n===0)
    return isPow(n,i/n,++counter)
return false;
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
function getPrime(n){
    let i=2;
    let arr=[];
    while(i<=n){
        if(isPrime(i))
            arr.push({p:i,oc:0});
        i++;
    }
    return arr;
}
function data(arr){
    let newArr=[];
    let oc=1;
    let x;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i+1]===arr[i])
    {
        oc++;
    }
    else{

        newArr.push({p:arr[i],oc})
        oc=1;
        
    }
        
  }
  return newArr;
}
function smallestMultiple(n,arr=getPrime(n)){
    let prod=1;
    if(n===1)
    {
            arr.forEach((prime)=>{
                prod*=Math.pow(prime.p,prime.oc);
            })
            return prod;
    }
        

data(getPrimeFactors(n)).forEach((factor)=>{
    arr.forEach((prime)=>{
        if(prime.p===factor.p && factor.oc>prime.oc)
            prime.oc=factor.oc;
    })
})
return smallestMultiple(n-1,arr,prod)
}
console.log(smallestMultiple(20))