class Node {
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

const iterativedfs = (root)=>{
    const result = []
    const stack = [root]

    if(root === null){
        console.log(null)
        return []
    }
    while(stack.length !== 0){
        const current = stack.pop()
        result.push(current.value)
        if(current.right)stack.push(current.right)
        if(current.left)stack.push(current.left)
    }
    console.log("Iterative DFS")
    console.log(result)
    return result
}
document.getElementById("id").innerHTML = iterativedfs(a)


//Empty array to store the recursive values
const RecurResult = []
const recursivedfs = (root) =>{
    
    if(root === null)
    return
    RecurResult.push(root.value)
    recursivedfs(root.left)
    recursivedfs(root.right)
}
recursivedfs(a)
console.log("Recursive DFS")
console.log(RecurResult)
//Shows the recursive function as an array
document.getElementById("rd").innerHTML = RecurResult


const iterativeBFS =(root)=>{
    const result = []
    const queue = [root]
    if(root === null){
        console.log(null)
        return[]
    }
    while(queue.length !== 0){
        const current = queue.shift()
        result.push(current.value)
        if(current.right)queue.push(current.right)  
        if(current.left)queue.push(current.left)
    }
    console.log("Iterative BFS")
    console.log(result)
    return result
}
document.getElementById("ib").innerHTML = iterativeBFS(a)
