import {Sorter} from './Sorter';


class Node{
    next: Node | null = null;
    constructor(public data: number){}
}

export class LinkedList extends Sorter{

    //if the child doesn't have a constructor - then you don't need a constructor

    // constructor(){
    //     super();
    // }

    head: Node | null=null; 
    //head start off empty

    add(data: number): void{
        const node = new Node(data);

        if(!this.head){
            this.head = node;
            return;
        }

        let tail = this.head; //first node in our chain

        while (tail.next){
            tail = tail.next; 
        }

        tail.next = node; 
    }

    get length():number{
        if(!this.head){
            return 0;
        }

        let length = 1;
        let node = this.head;
        while(node.next){
            length++;
            node = node.next;
        }

        return length;
    }
    at(index:number): Node{
        if(!this.head){
            throw new Error ("Index out of bounds");
        }

        let counter = 0;
        //this is TS stuff, it can either be a null or Node
        //null for empty
        let node: Node | null = this.head;
        while (node){
            if (counter === index){
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds')
    }

    compare(leftIndex: number, rightIndex: number):boolean{
        if (!this.head){
            throw new Error("List is empty");
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex:number, rightIndex: number):void{
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print():void{
        if(!this.head){
            return;
        }

        let node: Node | null = this.head;

        while (node){
            console.log(node.data);
            node=node.next;
        }
    }

}