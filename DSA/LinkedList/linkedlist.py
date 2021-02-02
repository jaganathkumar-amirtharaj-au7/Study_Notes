class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
class Linked_List:
    def __init__(self):
        self.head=None
    def insertathead(self,data): 
        if not self.head:
            self.head=Node(data)
        else:
            new_node=Node(data)
            new_node.next=self.head
            self.head=new_node
            
    def push(self,data):
        temp=self.head
        if not self.head:
            self.head=Node(data)
        else:
            while(temp.next):
                temp=temp.next
            temp.next=Node(data)
    def insertat(self,new_val,data):
        temp=self.head
        if not self.head:
            return
        else:
            while temp:
                if(temp.data==new_val):
                    new_node=Node(data)
                    new_node.next=temp.next
                    temp.next=new_node
                temp=temp.next

   
    def printlist(self):
        temp=self.head
        while(temp):
            print(temp.data)
            temp=temp.next
if __name__=='__main__':
    arr=[1,2,3,4,5]
    linky=Linked_List()
    for i in arr:
        linky.push(i)
    print("appending at last ")
    linky.printlist()
    # for i in arr:
    #     linky.insertathead(i)
    # print("inserting at first ")
    # linky.printlist()
    
    # linky.insertat(2,6)
    # print("inserting value inbetween")
    # linky.printlist()



        
