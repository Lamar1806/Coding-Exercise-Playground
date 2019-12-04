class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);

        if(this.root === null){
            this.root = newNode;            
        }else{
            let currentNode = this.root;
            let rightNode = this.root.right;
            let leftNode = this.root.left;
            let isInserted = false;

            while(isInserted === false){
                if(currentNode.val <= val){
                    if(currentNode.right === null){
                        rightNode = newNode;
                        currentNode.right = rightNode
                        isInserted = true;
                    }else{
                        currentNode = currentNode.right
                    }
                }
                if(currentNode.val > val){
                    if(currentNode.left === null){
                        leftNode = newNode;
                        currentNode.left = leftNode
                        isInserted = true;
                    }else{
                        currentNode = currentNode.left
                    }
                }
            }
        }
        return this
    }
}

let BreathFirstSearch = (tree)=>{
    let queue = []
    let visited = [];

    queue.push(tree.root)

    while(queue.length){
        node = queue.shift();
        visited.push(node.val);
        
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right);
        
    }
    console.log('queue', queue)
    console.log('visited', visited)

    return visited;
}


let MyTree = new Tree();
MyTree.insert(0)
MyTree.insert(1)
MyTree.insert(2)
MyTree.insert(-1)
MyTree.insert(-2) 
BreathFirstSearch(MyTree);
// console.log(MyTree);