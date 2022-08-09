//       a
//      / \
//     b   c
//    / \   \
//   d   e   f

class Node
{
    constructor(value)
    {
        this.value = value
        this.left = null
        this.right = null
    }
}
 
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const preOrder = (root)=>
{
    
    if(root === null)
    {
        return
    }
    console.log(root.value)
    preOrder(root.left) // b,d,e
    preOrder(root.right) // c,f
    // const arr = [root.value,root.left,root.right]
    // console.log(arr)
}
console.log("Pre Order")
preOrder(a)

const inOrder = (root)=>
{
    
    if(root === null)
    {
        return
    }
    
    inOrder(root.left) // b,d,e
    console.log(root.value)
    inOrder(root.right) // c,f
    //  const arr = [root.left,root.value,root.right]
    //  console.log(arr)
}
console.log("In Order")
inOrder(a)

const postOrder = (root)=>
{
    
    if(root === null)
    {
        return
    }
    
    postOrder(root.left) // b,d,e
    postOrder(root.right) // c,f
    console.log(root.value)
    // const arr = [root.value,root.left,root.right]
    // console.log(arr)
}
console.log("Post Order")
postOrder(a)