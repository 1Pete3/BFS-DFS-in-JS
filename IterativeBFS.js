//Using an iterative approach for a BFS since recursion with a call stack and a queue is required for this 
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

const bfs = (root)=>
{
    if(root === null){
        return[]
    }
    const result = []
    const queue = [root]
    
    while(queue.length != 0){
       //Treat index[0] as the front of the array
       const current = queue.shift()
       result.push(current.value)
       if(current.left !== null)queue.push(current.left)
       if(current.right !== null)queue.push(current.right)
       
    }
    console.log(result)
    return result
}
bfs(a)