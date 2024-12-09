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

// Difference between Binary tree and Binary Search Tree is that BSTs are in order
class BinarySearchTree {
    constructor(root=null){
        this.root = root
    }

    insert(data){
        const newNode = new TreeNode(data)
        // if there is no root node, then assign this.root to be newNode
        if(!this.root){
            this.root = newNode
        } else {
            // find a home for newNode
            this.recursiveInsert(this.root, newNode)
        }
    }

    recursiveInsert(node, newNode){
        // compare the node's value to the newNode's value
        if(newNode.data < node.data){
            // check if there's a node on the left
            if(node.left){
                // if there is a node there, keep traversing to find a home for newNode
                this.recursiveInsert(node.left, newNode)
            } else {
                 // since there is no node on the left, we assign newNode to be the left pointer to the node
                node.left = newNode
            }
        } else {
            if(node.right){
                // if there is a node on the right hand side, keep traversing to find a home for the newNode
                this.recursiveInsert(node.right, newNode)
            } else {
                // since there is no node on the right, we assign newNode to be the right pointer to the node
                node.right = newNode
            }
        }
    }

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
    // Add up all the nodes' data using recursion
    addValsRecursively(node=this.root){
        // base case
        if(!node){
            return 0
        }
        return node.data + this.addValsRecursively(node.left) + this.addValsRecursively(node.right)
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

// const five = new TreeNode(5)
// const three = new TreeNode(3)
// const one = new TreeNode(1)
// const two = new TreeNode(2)
// const four = new TreeNode(4)
// const seven = new TreeNode(7)
// const nine = new TreeNode(9)

// tree.root = five

// five.left = three
// five.right = seven
// seven.right = nine
// three.left = one
// three.right = four
// one.right = two

// console.log(inspect(tree, true, 10, true))



tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(1)
tree.insert(4)
tree.insert(2)
tree.insert(9)

// console.log(inspect(tree, true, 10, true))
// console.log(tree.addVals())
// console.log('-----------------')
// console.log(tree.addVals2())

console.log(tree.addValsRecursively())