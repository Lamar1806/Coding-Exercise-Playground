class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;           
        }else{
            this.tail.next = newNode
            this.tail = newNode;
        }

        this.length ++;
        return this;
    }

    pop(){
        if(!this.head){
            console.log('empty')
            return undefined;
        }

        let tail = this.tail;

        if(this.length === 0){                        
            this.head = null;
            this.tail = null;
        }else{
            var current = this.head;
            let prevCurrent = null;
            while(current){
                if(current.next){
                    prevCurrent = current;
                }
                current = current.next;
            }
            prevCurrent.next = null;
            this.tail = prevCurrent;
        }
        this.length --
        return tail
    }

    //Removes Node From begining of linked list
    shift(){
        if(!this.head){
            console.log('empty')
            return undefined;
        }

        let head = this.head;
        this.head = this.head.next;
        this.length --;

        if(this.length === 0){
            this.tail = null;
        }

        return head
    }
    //add To Begining of list
    unShift(val){
        let newHead = new Node(val)
        let head = this.head;

        this.head = newHead;
        this.head.next = head;
        this.length ++;

        return this
    }
    
    get(index){
        if(index < 0 || index > this.length){
            return undefined;
        }

        if(0){
            return this.head;
        }else if(index === this.length -1){
            return this.tail;
        }else{
            let node = this.head;
            for(let i = 0; i < index;  i++){
                node = node.next;
            }
            return node;
        }        
    }

    set(index, val){
        let node = this.get(index)
        
        if(!node){
            return false;
        }
        node.val = val;
        
        return this;
    }

    insert(index, val){
        if(index === 0){
            this.unShift(val);
            return;
        }  

        let prevNode = this.get(index-1)
        let tempNode = this.get(index);
        let newnode = new Node(val)

        if(!tempNode){
            return false;
        }

        prevNode.next = newnode;
        newnode.next = tempNode;

        // console.log(this);
        return this;
    }

    remove(index){
        if(index < 0 || index > this.length){
            return undefined;
        }

        if(index === 0 && this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        if(index === 0 && this.length > 1 && this.length < 2){
            this.head = this.head.next;
            this.tail = this.head;
            this.length --;
        }
        if(index === 0 && this.length > 1){
            let node = this.get(index);
            let prevNode = this.get(index -1);        
            let tempNext = node.next;
            
            prevNode.next = tempNext;
    
            node.val = null;
            node.next = null;
            this.length --;
            
        }       

        console.log(this);

        return this;
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node;
        
        let next;
        var prev = null;
     
        let counter = 0;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        console.log(this, counter);
        return this;
    }
    
}

let list = new SinglyLinkedList();
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.reverse();
   
// list.unShift(1);

// list.set(0, 5) 
// list.insert(1, 999) 
// list.remove(1);
// list.pop();
// console.log(list)

