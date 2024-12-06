// Tree: data structure that represents hierarchical data. Each node can have many children

// Binary Tree: only has AT MOST two children, left and right

// Binary Search Tree: binary trees that are in order in terms of elements


class TreeNode {
    constructor(data=null){
        this.data = data
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor(root=null){
        this.root = root
    }

    insert(){}

    recursiveInsert(){}

    // Breadth-first traversal where add up all the vals (using an array queue)
    addVals(){
        console.log("queue order: ")
        let total = 0
        // FIFO first in first out. Add to the back, remove from the front
        const queue = []
        queue.push(this.root)

        while(queue.length){
            // take the first element out of the queue, and look at it
            const node = queue.shift()
            console.log(node.data)
            // add it's data to the total
            total += node.data

            // check the left and right pointers for the current node. If either node(left or right) exists(isn't null) then we add the nodes to the queue
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return total
    }

    // Depth-first traversal where we add up all the vals (using an array stack)
    addVals2(){
        console.log("stack order: ")
        let total = 0
        // LIFO last in first out: add the back, remove from the back
        const stack = []
        stack.push(this.root)

        while(stack.length){
            const node = stack.pop()
            console.log(node.data)
            total += node.data
            // check to see if there are left and right nodes
            if(node.right){
                stack.push(node.right)
            }
            if(node.left){
                stack.push(node.left)
            }
        }
        return total
    }
}
const { inspect } = require('util')
const tree = new BinarySearchTree()

//        5
//       / \
//      3   7
//     / \   \
//    1   4   9
//     \
//      2

// order of nodes gettings hit in breadth first: 5371492

const five = new TreeNode(5)
const three = new TreeNode(3)
const one = new TreeNode(1)
const two = new TreeNode(2)
const four = new TreeNode(4)
const seven = new TreeNode(7)
const nine = new TreeNode(9)

tree.root = five

five.left = three
five.right = seven
seven.right = nine
three.left = one
three.right = four
one.right = two

// console.log(inspect(tree, true, 10, true))

console.log(tree.addVals())
console.log(tree.addVals2())