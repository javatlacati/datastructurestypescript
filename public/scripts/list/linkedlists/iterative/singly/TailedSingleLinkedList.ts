import {List} from "../../../list";
import {SinglyLinkedNode} from "./SinglyLinkedNode";

export class TailedSingleLinkedList<Type> implements List<Type> {
    private head: SinglyLinkedNode<Type>;
    private tail: SinglyLinkedNode<Type>;

  public size(): number {
        let tmp: SinglyLinkedNode<Type> = this.head;
        let size = 0;
        while (null != tmp) {
            tmp = tmp.next;
            size++;
        }
        return size;
    }

    public isEmpty(): boolean {
        return this.head == null;
    }

    public contains(o: Type): boolean {
        let current: SinglyLinkedNode<Type> = this.head;
        while (current != null) {
            if (o === current.item)
                return true;
            current = current.next;
        }
        return false;
    }

    public toArray(): Type[] {
        let size = this.size();
        let retorno: Type[] = [];
        if (size != 0) {
            let currentNode: SinglyLinkedNode<Type> = this.head;
            let index = 0;
            while (currentNode != null) {
                retorno[index] = currentNode.item;
                currentNode = currentNode.next;
                index++;
            }
        }
        return retorno;
    }

    /**
     * {@inheritDoc}
     */
    public add(element: Type): boolean {
        //        System.out.println("Adding: "+element);
        return this.addAtEnd(new SinglyLinkedNode<Type>(element));
    }

    public clear(): void {
        this.head = null;
        this.tail = null;
    }

    private addAtEnd(aNode: SinglyLinkedNode<Type>): boolean {
        // check if the list is empty
        if (this.head == null) {
            //since there is only one element, both head and
            //tail points to the same object.
            this.head = aNode;
            this.tail = aNode;
        } else {
            //set current tail next link to new node
            this.tail.next = aNode;
            //set tail as newly created node
            this.tail = aNode;
        }
        return true;
    }

    public addAfter(element: Type, after: Type): void {

        let tmp: SinglyLinkedNode<Type> = this.head;
        let refNode: SinglyLinkedNode<Type> = null;
        /*
         * Traverse till given element
         */
        while (true) {
            if (tmp == null) {
                //break;
                throw new Error("Unable to find the given element...");
            }
//            if(tmp.compareTo(after) == 0){
            if (tmp.item === after) {
                //found the target node, add after this node
                refNode = tmp;
                break;
            }
            tmp = tmp.next;
        }
        if (refNode != null) {
            //add element after the target node
            let nd: SinglyLinkedNode<Type> = new SinglyLinkedNode<Type>(element);
            nd.next = tmp.next;
            if (tmp == this.tail) {
                this.tail = nd;
            }
            tmp.next = nd;
        } else {
            throw new Error("Unable to find the given element...");
        }
    }

public deleteFront():void{

    if(null == this.head){
        throw new Error("Capacity underflow");
    }
    let tmp:SinglyLinkedNode<Type> = this.head;
    this.head = tmp.next;
    if(null == this.head){
        this.tail = null;
    }
    //console.log("Deleted: "+tmp.getItem());
}

    public deleteAfter(after: Type): void {
        let tmp: SinglyLinkedNode<Type> = this.head;
        let refNode: SinglyLinkedNode<Type> = null;
        //System.out.println("Traversing to all nodes..");
        /*
         * Traverse till given element
         */
        while (true) {
            if (tmp == null) {
                break;
            }
            if (tmp.item === after) {//if(tmp.compareTo(after) == 0){
                //found the target node, add after this node
                refNode = tmp;
                break;
            }
            tmp = tmp.next;
        }
        if (refNode != null) {
            tmp = refNode.next;
            refNode.next = tmp.next;
            if (refNode.next == null) {
                this.tail = refNode;
            }
            //System.out.println("Deleted: "+tmp.getItem());
        } else {
            throw new Error("Unable to find the given element...");
        }
    }

    public getStrings(): String {
        if (this.head == null) {
            return "";
        } else {
            let salida: String = this.head.toString();
            let actual: SinglyLinkedNode<Type> = this.head;
            while (actual.next != null) {
                actual = actual.next;
                salida.concat(actual.toString().concat());
            }
            return salida.toString();
        }
    }

public printList():void {
    console.log(this.getStrings());
}



    public iterator(): Iterator<Type> {
        let arr = this.toArray();
        return arr[Symbol.iterator]();
    }


/*class TailedSingleListIterator implements Iterable<Type> {
    var arr:Type[];

    constructor( public list:TailedSingleLinkedList<Type>) {
        arr=this.list.toArray();
    }

    [Symbol.iterator]() {
        let pointer = 0;

        return {
            next(): IteratorResult<Component> {
                if (pointer < components.length) {
                    return {
                        done: false,
                        value: components[pointer++]
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        }
    }*/
}