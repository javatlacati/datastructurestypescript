import {List} from "../../list";
import {Node} from "./Node";

export class TailedSingleLinkedList<Type> implements List<Type> {
    private head: Node<Type>;
    private tail: Node<Type>;

    private addAtEnd(aNode: Node<Type>): boolean {
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

    public size(): number {
        let tmp: Node<Type> = this.head;
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
        let current: Node<Type> = this.head;
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
            let currentNode: Node<Type> = this.head;
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
        return this.addAtEnd(new Node<Type>(element));
    }

    public clear(): void {
        this.head = null;
        this.tail = null;
    }
}