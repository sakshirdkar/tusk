class LinkedList {
    constructor(data)
    {
        this.head = {
              data =data,
              next =null
        };
        this.tail = this.head;
        this.length =1;
    }
    

    insert(data,position){
       const newNode ={
            data =data,
            next =null
        }
        if(position == 1)
        {
             newNode.next = this.head;
             this.head = newNode;
        }
        elseif(position<= this.length)
        {
            let p=0;
            let mynode = this.head;
            while(p < position-1  )
            {
              p++;
              mynode = mynode.next;

            }
            //p=1  mynode = 10
            let temp =mynode.next;
            mynode.next= newNode;
            newNode.next = temp;

        }
        elseif(position === this.length+1)
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }


    remove(position){
        if(position === 0)
        {
            let temp = this.head.next;
            delete this.head;
            this.head = temp;
        }
        else {
            if(position<= this.length)
            {
               let p=0;
               let previous = this.head;
               while(p < position-1  )
               {
                 p++;
                 previous = previous.next;

               } 
               let mynode =previous.next;
               previous.next= mynode.next;
               delete mynode;
            }
            
        }  this.length--;
        
    }
    print(){
        let arr =[];
        let current = this.head;
        while(current.next!= null){
          arr.push(current.data);
          current = current.next; 
        }
        return arr;
    }
}

const myLinked = new LinkedList(4);
myLinked.insert(3,1);
myLinked.insert(17,2);
myLinked.insert(78,4);
myLinked.insert(108,1);

console.log(myLinked.print());

