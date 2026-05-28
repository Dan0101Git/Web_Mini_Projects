const Node=(data)=>{
    let left=null;
    let right =null;
    return {data, left, right}
}
const Tree=(array)=>{
    console.log(array.length);
    array=sortArray(array);
    array=removeDuplicates(array);
    console.log(array);
    const root=buildTree(array);
    function buildTree(array){
       return null;
    }
    function sortArray(array)
    {
        array.sort((a,b)=>a-b); 
        return array;
    }
    function removeDuplicates(array){
        newArray=[];
      for(let index=0;index<array.length;index++){
            if(array[index]===array[index+1])
                continue;
            newArray.push(array[index]);
        }
        return newArray
    }
    return {root};
}
let tree1=Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);