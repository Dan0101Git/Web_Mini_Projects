function mergeArray(list1,list2){
    let mergedArray=[];
    let i=0;
    let j=0;
    let k=0;
while (i <list1.length && j < list2.length)
        {
            if(list1[i]<=list2[j])
        mergedArray[k++]=list1[i++];
    else if(list2[j]<list1[i])
        mergedArray[k++]=list2[j++];

}

let existingList=i<list1.length?list1:list2;
if(existingList)
{let other=existingList===list1?{list:list1,counter:i}:{list:list2,counter:j};
while(other.counter<other.list.length)
{

    mergedArray[k++]=other.list[other.counter++];
}}
return mergedArray;

}
function mergeSort(sortedArray,left=0,right=sortedArray.length-1){

    let mid=parseInt((left+right)/2);
    console.log(sortedArray[mid],left,mid,right)
if(left>=right){
    console.log("base case reached");
        return [sortedArray[mid]];
}


let list1=mergeSort(sortedArray,left,mid);
let list2=mergeSort(sortedArray,mid+1,right);
//console.log(list2)
let mergedArray= mergeArray(list1,list2);
//console.log(mergedArray)
return mergedArray;
}
console.log(mergeSort([7,24,98,21,54,87,213,867,32,54,1,324523,45,3244,45455343]));