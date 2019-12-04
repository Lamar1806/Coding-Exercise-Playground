class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var first = new Node('hi');
first.next = new Node('there');
first.next.next = new Node('How')
first.next.next.next = new Node('are')
first.next.next.next.next = new Node('you')
first.next.next.next.next.next = new Node('?')

console.log(first)