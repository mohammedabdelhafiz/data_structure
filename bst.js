class Node {
    constructor (data) {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BST {
    constructor() {
        this.root=null;
        console.log("---");
    }

    insert (data){
        var newnode=new Node(data);
        if (this.root===null){
            this.root=newnode;
        }
        else{
            this.insertnode(this.root,newnode);
        }
    }

    insertnode(node,newnode){
        if (newnode.data < node.data){
            if(node.left===null){
                node.left=newnode;
            }

            else{
                this.insertnode(node.left,newnode);
            }
        }

        else {
            if(node.right === null){
                node.right=newnode;
            }
            else{
                this.insertnode(node.right,newnode);
            }
        }
    }

    getRootNode(){
        return this.root;
    }

    getMinvalue(){
        if(this.root===null){
            return null;
        }
        else{
            return this.getMinvalueNode(this.root);
        }
    }

    getMinvalueNode(node){
        if (node.left===null){
            return node;
        }

        else{
            return this.getMinvalueNode(node.left);
        }
    }

    getmaxValue(){
        if(this.root===null){
            return null;
        }

        else{
            return this.getmaxValueNode(this.node);
        }
    }

    getmaxValueNode(node){
        if(node.right===null){
            return node;
        }

        else{
            return this.getmaxValueNode(node.right);
        }
    }

    preorder(node){
        if(node !==null){
            console.log("preorder" + node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    inorder(node){
        if(node !==null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

}


var BinarySearchTree = new BST();

BinarySearchTree.insert(100);
BinarySearchTree.insert(200);
BinarySearchTree.insert(50);
BinarySearchTree.insert(20);
BinarySearchTree.insert(10);
BinarySearchTree.insert(70);


var rootval=BinarySearchTree.getRootNode();

console.log("----------"+ JSON.stringify(rootval));

console.log("minval= " + getMinvalue().data)
console.log("minval= " + getmaxValue().data)


