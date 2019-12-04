class Node{
    constructor(val){
        this.val = val;
        this.next = null;

    }
}
class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //pushing from the start
    push(val){
        if(this.length === 0){
            this.head = new Node(val)
            this.tail = this.head;
            this.length++;
            return;
        }
        let temp = this.head;
        this.head.next = this.head;
        this.head = new Node(val)
        this.head.next = temp;
        this.length++;
    }
    
    //poping from the start
    pop(){
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

let stack = new Stack();
stack.push('zero')
stack.push('one')
stack.pop();
console.log(stack)