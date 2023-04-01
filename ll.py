class Linkedlistnode:
    def __init__(self,value,nextnode=None):
        self.value=value
        self.nextnode=nextnode

node1=Linkedlistnode("3")
node2=Linkedlistnode("5")
node3=Linkedlistnode("6")

node1.nextnode=node2
node2.nextnode=node3

currentNode=node1
while True:
    print currentNode.value , "," ,
    if currentNode.nextNode is None:
        print "none"
        break
    currentNode=currentNode.nextNode

