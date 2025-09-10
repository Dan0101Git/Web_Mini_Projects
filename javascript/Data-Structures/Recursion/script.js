console.log("we are gpnna recurse, recur.., recu..,rec,..re...,r..");

function fibs(n){
console.log("This was printed recursively");
if(n==2)
    return [0,1]
if(n<=1)
    return [0]


    let arr=fibs(n-1);
arr.push(arr[arr.length-1]+arr[arr.length-2]);
return arr;

}
console.log(fibs(8));

