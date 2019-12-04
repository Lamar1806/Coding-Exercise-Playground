class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val){
        let node = new Node(val)

        if(this.length === 0){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    dequeue(){
        if(this.length === 0){
            throw 'empty'
        }

        if(this.length === 1){
            let temp = this.head;
            this.tail = null;
            this.head = null;
            this.length = 0;
            return temp;
        }

        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        return temp;
    }
}

let queue = new Queue();
queue.enqueue('zero');
console.log(queue); 