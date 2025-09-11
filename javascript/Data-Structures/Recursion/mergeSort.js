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
if(left>=right)
    return sortedArray[(left+right)/2]
let mid=(left+right)/2;
mergeSort(sortedArray,left,mid);
mergeSort(sortedArray,mid+1,right);
mergeArray()
}
let list1;
let list2;
list1 = [2];
list2 = [1];
console.log(mergeArray(list1,list2));