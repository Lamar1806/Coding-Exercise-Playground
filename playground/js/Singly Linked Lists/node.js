class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        
        if(!this.length){
            this.head = node;
            this.tail = this.head;
            this.length++; 
            return ;
        }

        this.tail.next = node;
        this.tail = node;
        this.length++; 
    }

    pop(){
        let tail = this.tail;

        let currentNode = this.head;
        let counter = 1;

        while(counter < this.length){
            currentNode = currentNode.next;

            if(counter === this.length - 2){
                this.tail = currentNode;
                this.tail.next = null;
                console.log('new tail: ',currentNode)
            }

            counter ++;
        }
        return tail;
    }

    find(int){
        if(int <= 0 || int > this.length){
            throw "int must be value of 1 - " + this.length;
        }

        if(int === 1){
            return this.head;
        }

        if(int === this.length){
            return this.tail;
        }

        let node = null;

        let currentNode = this.head;
        let counter = 1;

        while(counter < this.length){
            currentNode = currentNode.next;

            if(counter == int){
                node = currentNode;
            }

            counter ++;
        }

        return node;
    }

    shift(){
        if(this.length <= 0){
            return undefined;
        }
        let head = this.head;
        this.head = head.next
        return head;
    }

    unShifting(val){
        let node = new Node(val);
        let oldHead = this.head;
        node.next = oldHead;
        this.head = node;         
    }

    set(index, val){
        let foundNode = this.find(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index === 0 || index === this.length){
            this.push(value)
            return true;
        }
        let node = new Node(value)
        let previousNode = this.find(index - 1)
        let nextNode = this.find(index)
        previousNode.next = node;
        node.next = nextNode;
    }

    reverse(){  
        let currentNode = this.head;
        let count = 1;

        let tempNext = null;
        let tempCurrent = null;
        
        while(currentNode.next){
            if(count > this.length -1){
                currentNode.next.next = null;
                this.tail = currentNode.next;
                break;
            }
            
            
            console.log('before switch: \n', currentNode, '\n')

            //Create Temp var for current and next node
            tempCurrent = {... currentNode}
            tempNext = {... currentNode.next}
                   
            //set first node
            currentNode.val = tempNext.val;
            currentNode.next = {... tempNext.next}; //next node my be set correctly here

            //set second Node
            currentNode.next.val = tempCurrent.val;
            currentNode.next.next = tempCurrent.next;

            //set next node pointer (tempNext.next.next)            
            // if(tempNext.next){
            //     currentNode = tempNext.next
            // }

            console.log('after swtich \n',currentNode, '\n')

            count ++;
        }
        console.log(this)
    }


}

let list = new List();
list.push(0)
list.push(1)
list.push(2)
// list.push(3)
// list.pop();

// list.find(1);
list.reverse()
// console.log(list)