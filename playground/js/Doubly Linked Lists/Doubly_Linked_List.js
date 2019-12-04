class Node{
    constructor(val){
        this.prev = null;
        this.next = null;
        this.val = val;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);

        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
    }

    //get and remove last value
    pop(){
        if(this.length === 0){
            throw 'list is empty'
        }
        let temp = this.tail
        if(this.tail.prev === null){
            this.tail = null;
            this.head = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--
        return temp;
    }

    //Removes Node From begining of linked list
    shift(){
        if(this.length === 0){
            throw 'list is empty'
        }
        let temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        return temp;
    }

    //add To Begining of list
    unShift(val){
        if(this.length === 0){
            this.push(val);
            return;
        }
        let node = new Node(val)
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++
    }

    get(index){
        if(this.length === 0 ){
            throw 'empty'
        }
        if(index < 0 || index >= this.length ){
            throw 'out of bounds'
        }
        if(index === 0){
            return this.head;
        }
        if(index === this.length-1){
            return this.tail;
        }
        
        let count = 0;
       
        let nextNode = this.head.next;
        let node = null;
        while(nextNode.next){              

            if(count === index){
                console.log('count', count);
                console.log(nextNode)
                node = nextNode;
                break;
            } 

            nextNode = nextNode.next

            count ++;
        }
        return node;
    }

    set(index, val){
        this.get(index).val = val;
    }

    remove(index){
        if(this.length === 0 ){
            throw 'empty'
        }
        if(index < 0 || index >= this.length ){
            throw 'out of bounds'
        }
        if(index === 0 && this.length === 1){
            this.head === null
            this.length--
            return ;
        }
        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
        }
        if(index === this.length -1){
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.get(index).prev.next = this.get(index).next;
        this.get(index) = null;

    }

    reverse(){
        
    }
}
 


let list = new DoublyLinkedList();
list.push('first');
list.push('second');
list.push('third');
// list.pop();
// list.shift();
list.unShift('zero') ;
list.set(0,'1 million')
let node = list.get(0);
console.log(node); 
// console.log(list) 