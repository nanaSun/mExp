const arr=[1,2,3,4,5]
function buildNode(child,parent){
    return {
        value:child,
        mark:0,
        parent:parent,
        children:[]
    }
}
function buildTree(arr,i,parent){
    let a=[].concat(arr),curNodeChildren;
    const tree=buildNode(a[i],parent)
    a.splice(i,1);
    for(let k=0;k<a.length;k++){
        let n=[].concat(a)
        tree.children.push(buildTree(n,k,tree))
    }
    return tree
}
function dfs(arr){
    let a=[0].concat(arr),array=[],meno=[];
    const tree=buildTree(a,0,null)
    let node=tree
    while(node!==null&&node.children.length>=0){
        let hasNode=false;
        for(let i=0;i<node.children.length;i++){
            if(node.children[i].mark===0){
                node.children[i].mark=1;
                node=node.children[i]
                meno.push((meno[meno.length-1]||[]).concat(node.value))
                hasNode=true
                break;
            }
        }
        if(!hasNode){
            let series=meno.pop()
            if(node.children.length===0){
                array.push(series)
            }
            node=node.parent
        }
    }
    return array
}
let arrays=dfs(arr)