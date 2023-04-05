class Node:
    def __init__(self,data):
        self.data=data
        self.next=None

class LinkedList:
    def __init__(self):
        self.head=None

    def print_ll(self):
        if self.head ==None:
            print("Linked List is empty")

        else:
            n=self.head
            while n is not None:
                print(n.data)
                n=n.ref

ll1=LinkedList()
ll1.print_ll()