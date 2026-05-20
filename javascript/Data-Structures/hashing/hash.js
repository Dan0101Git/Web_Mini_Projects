const Node=({key,value})=>{
   let data={key:key,value:value};
    let nextNode=null;
    return {data,nextNode};
}
const linkedList=()=>{
    let headNode;//common standard truth for headnode

    function traverse(head,key,index=0){
        let temp=head;
         while(temp!=null){
          if(index && temp.nextNode.data.key===key)
            break;          
          if(temp.data.key===key)
            break;
        temp=temp.nextNode;
         }
        return temp   
    }
    function fullTraverse(head){
        let temp=head;
        let dataArray=[];
        let keyArray=[];
        let valueArray=[];
        while(temp!=null)
        {
            dataArray.push([temp.data.key,temp.data.value]);
            keyArray.push(temp.data.key);
            valueArray.push(temp.data.value);
            temp=temp.nextNode;
        }
        return {keyArray,valueArray,dataArray}}
    
    function getData(){
     return fullTraverse(headNode);
    }
    function prepend(value){//adds heaad of value to list
        let newNode=Node(value);
        newNode.nextNode= headNode?headNode:null;
        headNode=newNode;
    }

    function contains(key){
        return  traverse(headNode,key);
    }
    function removeAt(key){
                       let indexNode=traverse(headNode,key,1)//first node
       if(headNode.data.key!=key) {
            if(indexNode){
                let lastNode=indexNode.nextNode.nextNode;
                indexNode.nextNode=lastNode;
            }
            else return false;
        }
        else 
            headNode=headNode.nextNode;
        return true

    }
    return {
       prepend,contains,removeAt, getData};
    }

const hashMap=function(){
    let hashMapArray=[];
    let loadFactor=0.75;
    let capacity=16;
    function bucket(code){
        return hashMapArray[code];
    }
function hash(key){
    let hashCode=0;
    let primeNumber=31;
    for(let i=0;i<key.length;i++){
        hashCode=(primeNumber*hashCode+key.charCodeAt(i))%capacity;
    }
    return hashCode;
    }
    function getBucket(key){
            let bucketIndex=hash(key);
    let bucketList=bucket(bucketIndex);
    return bucketList;
    }
function set(key,value){
    let bucketIndex=hash(key);
    
    let bucketList=bucket(bucketIndex);
    if(bucketList)
    {
        if(node=bucketList.contains(key)){
            node.data={key,value};
        }
        else{
            bucketList.prepend({key,value});
        }
    }
    else{//make a new list and add a head to the list
        bucketList=linkedList();
        hashMapArray[bucketIndex]=bucketList;
        hashMapArray[bucketIndex].prepend({key,value})
    }
    return;
}
function get(key){
        let bucketIndex=hash(key);
    let bucketList=bucket(bucketIndex);
    let node=bucketList.contains(key);
    if(bucketList && node){
        return (node.data.value);
    }
    else return null;
} 
function has(key)
{
    if(get(key))
        return true;
    return false;
}
function remove(key){
    let bucket=getBucket(key);
    return (bucket.removeAt(key));
}
function length(){
    let s=0;
    for(let bucket of hashMapArray){
     
        if(bucket)
        s=s+bucket.getData().keyArray.length;
    }
    return s;
}
function clear(){
    hashMapArray=[];
}
function keys(){
    let keyArray=[];
    for(let bucket of hashMapArray){
        if(bucket)
            keyArray.push(...bucket.getData().keyArray);
    }
    return keyArray
}
function values(){
    let valueArray=[];
    for(let bucket of hashMapArray){
        if(bucket)
        valueArray.push(...bucket.getData().valueArray);
    }
    return valueArray;
}
function entries(){
    let entryArray=[];
        for(let bucket of hashMapArray){
        if(bucket)
        entryArray.push(...bucket.getData().dataArray);
    }
    return entryArray;
}
    return {
        hash, set, get, has, remove, length, clear, keys, values, entries
    }
}
let test=hashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden');
test.set('lion', 'gold');

console.log(test.length(),test.get("frog"),test.has("grape"),test.remove("lion"),test.length(),
test.keys(),test.values(),test.entries());