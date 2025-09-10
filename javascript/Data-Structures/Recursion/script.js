console.log("we are gpnna recurse, recur.., recu..,rec,..re...,r..");

function fibs(n,arr=[0,1]){

    if(n<=2)
        return {result:n-1,arr};

    const result= fibs(n-2,arr).result+fibs(n-1,arr).result;
    if(n>arr.length)
    arr.push(result);
    return {result,arr}
}
console.log(fibs(2).arr);
