function evenFibs(fibN1=1,fibN2=2,sum=0){
    if(fibN2>100)
    {
        return sum;
    }   

    if(fibN2%2===0)
        sum+=fibN2;
    console.log(sum,fibN2)

     sum=evenFibs(fibN2,fibN1+fibN2,sum);
      

    return sum;
}
console.log(evenFibs());