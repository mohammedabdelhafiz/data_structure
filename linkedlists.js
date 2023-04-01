class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}
class LinkedList {
    constructor(){
        this.head=null;
    }
    addFront(val){
        let newNode = new Node(val);
        if (this.head==null){
            this.head=newNode;
            return this;
        }
        newNode.next=this.head;
        this.head=newNode;
        return this;
    }

    traverse(){
        let current = this.head;
        while(current!=null){
            console.log(current.data);
            current=current.next
        }
    }
}

let myLL= new LinkedList();
myLL.addFront(10);
myLL.addFront(50);
myLL.addFront(60);
myLL.traverse();
