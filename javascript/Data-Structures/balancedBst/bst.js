const Node=(data)=>{
    let left=null;
    let right =null;
    return {data, left, right}
}
const Tree=(array)=>{
    const root=buildTree(array);
    return {root};
}