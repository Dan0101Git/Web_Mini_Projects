const Node=(data=null)=>{
    let nextNode=null;
    return {
        data, nextNode
    }
};
const linkedList=()=>{
    let headNode;//common standard truth for headnode

    function traverse(head,index,flag=0){let dataArray=[];
        let temp=head;
        let c=0;
         while(c<index){
           if(flag) dataArray.push(temp.data);// this has a problem right now
            temp=temp.nextNode?temp.nextNode:temp;;
            c++;
         }
        return {temp,dataArray};    
    }
    function makeNode(data){
        return Node(data);

    }
    function append(value){
        let lastNode=tail();
        const newNode=makeNode(value);
        newNode.nextNode=null;
        if(lastNode)
                   lastNode.nextNode=newNode;
        else  headNode=newNode;
    };
    function prepend(value){//adds heaad of value to list
        let newNode=Node(value);
        newNode.nextNode= headNode?headNode:null;
        headNode=newNode;
    }
    function size(){
        let temp=headNode;
        let c=temp?1:0;
        while(temp && temp.nextNode!=null)
        {
            temp=temp.nextNode
            c++;
        }
        return c;
    }
    function head(){
        return headNode;
    }
    function tail(){
       return traverse(headNode,size()).temp;
    }

    function at(index){
        let n=size();
        if(index>n)
            return undefined;
        return  traverse(headNode,index).temp;
    }
    function pop(){
        let tempHead=headNode;
        headNode=headNode.nextNode;
        return headNode?tempHead.data:undefined;
    }
    function contains(value){
        return toString().includes(value);
    }
    function findIndex(value){
        return toString().indexOf(value);
    }
    function toString(){
        return traverse(headNode,size(),1).dataArray;
    }
    function insertAt(index,...values){
        if(index>size() || index<0)
          throw new Error(RangeError)
        let indexNode=traverse(headNode,index-1).temp;//first node
        let lastNode=indexNode?indexNode.nextNode:null;
        let temp=indexNode;
        values.forEach((value)=>{let createdNode=makeNode(value);
            if(temp)temp.nextNode=createdNode;
            else
            headNode=createdNode;
            temp=createdNode;
        });
        temp.nextNode=lastNode;
        return traverse(headNode,size(),1).dataArray;
    }
    function removeAt(index){
        let listSize=size();
          if(index>=listSize || index<0 || listSize==1)
          throw new Error(RangeError);
               let indexNode=traverse(headNode,index-1).temp;//first node
           //    console.log(indexNode)
       if(index>0) {let lastNode=indexNode.nextNode.nextNode;
        indexNode.nextNode=lastNode;}
        else 
        headNode=headNode.nextNode;
         return traverse(headNode,size(),1).dataArray;
    }
    return {
        append, prepend, size, head, tail, at, pop, contains, toString
   ,findIndex,insertAt,removeAt};
}
let list1=linkedList();
list1.append(10);
list1.append("danish");
console.log(list1.tail(),list1.head(),list1.size(),list1.toString(),list1.contains(101),
list1.findIndex("danish"),list1.insertAt(1,45,65,76,"gaunik"));

list1.removeAt(5);
list1.removeAt(1);
list1.removeAt(2);
list1.removeAt(0)
 console.log(list1.removeAt(0));
