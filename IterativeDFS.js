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

const depthFirstSearch = (root) =>
{
  const stack = [root]
  const result = []

  if(root === null){ 
    console.log("Empty")
    return[]
  }
  while(stack.length != 0)
  {
    //removing element from the top of the stack
    const current = stack.pop()
    //add current value to the result array
    result.push(current.value)
    if(current.right )stack.push(current.right)
    if(current.left ) stack.push(current.left)
  }
  console.log(result)
  return result
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


depthFirstSearch(a)