class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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
    
    find(val){
        if(this.root.val === val){
            return this.root
        }
        let currentNode = this.root;        
        let found = 'Not Found';

        while(currentNode){
            let leftNode = currentNode.left;
            let rightNode = currentNode.right;
    
            if(currentNode.val === val){
                return currentNode;
            }
            if(currentNode.val === val){
                found = rightNode;                
                break;
            } 
            if(currentNode.val <= val){
                if(rightNode === null){
                    break;
                }
                currentNode = rightNode;
            } 
            if(currentNode.val > val){
                if(leftNode === null){
                    break;
                }
                currentNode = leftNode;               
            }
            
        }        
        return found;
    }
}

let Tree = new BinarySearchTree();
Tree.insert(0)
Tree.insert(1)
Tree.insert(2)
Tree.insert(-1)
Tree.insert(-2) 
let node = Tree.find(-2);
console.log(node);
// console.log(Tree);