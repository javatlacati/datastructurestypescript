import {List} from "../../../list";
import {SinglyLinkedNode} from "./SinglyLinkedNode";

export class SingleLinkedList<Type> implements List<Type> {
    private root: SinglyLinkedNode<Type>;

    public addAtRoot(element: Type): void {
        let newNode: SinglyLinkedNode<Type> = new SinglyLinkedNode<Type>(element);
        newNode.next = this.root;
        this.root = newNode;
    }

    public addAtEnd(element: Type): boolean {
        let newNode: SinglyLinkedNode<Type> = new SinglyLinkedNode<Type>(element);
        try {
            if (this.root == null) {
                this.root = newNode;
            } else {
                let actual: SinglyLinkedNode<Type> = this.root;
                while (actual.next != null) {
                    actual = actual.next;
                }
                actual.next = newNode;
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Index is 0 base
     *
     * @param element
     * @param index   position to insert
     */
    public addAtIndex(element: Type, index: Number): void {
        if (index == 0) {
            this.addAtRoot(element);
        } else {
            if (index > 0) {
                let currentNode: SinglyLinkedNode<Type> = this.root.next;
                for (let currentIndex = 1; currentIndex < index; currentIndex++) {
                    let next: SinglyLinkedNode<Type> = currentNode.next;
                    if (next != null) {
                        currentNode = next;
                    } else {
                        throw("the specified index is not possible to reach");
                    }
                }
                currentNode.next = new SinglyLinkedNode<Type>(element);
            } else {
                throw("no negative index values allowed");
            }
        }
    }

    public addSingleLinkedListAtRoot(singleLinkedList: SingleLinkedList<Type>): void {
        singleLinkedList.addAtEnd(this.root.item);
        this.root = singleLinkedList.root;
    }

    public addSingleLinkedListAtEnd(singleLinkedList: SingleLinkedList<Type>): void {
        this.addAtRoot(singleLinkedList.root.item);
    }

    public removeLast(): void {
        if (this.root != null) {
            if (this.root.next == null) {
                this.root = null;
            } else {
                let currentNode: SinglyLinkedNode<Type> = this.root;
                while (currentNode.next != null) {
                    currentNode = currentNode.next;
                }
                if (currentNode.next == null) {
                    currentNode.next = null;
                }
            }
        }
    }

    size(): number {
        let size: number = 0;
        let currentNode: SinglyLinkedNode<Type> = this.root;
        while (currentNode != null) {
            currentNode = currentNode.next;
            size++;
        }
        return size;
    }

    isEmpty(): boolean {
        return this.root == null;
    }

    contains(o: Type): boolean {
        if (this.root == null && o == null) {
            return false;
        } else {
            let currentNode: SinglyLinkedNode<Type> = this.root;
            while (currentNode) { //!= null
                if (currentNode.item == o) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    toArray(): Type[] {
        let retorno: Type[];
        let currentNode: SinglyLinkedNode<Type> = this.root;
        let index = 0;
        while (currentNode != null) {
            retorno[index] = currentNode.item;
            currentNode = currentNode.next;
            index++;
        }
        return retorno;
    }

    add(element: Type): boolean {
        return this.addAtEnd(element);
    }

    clear(): void {
        this.root = null;
    }

}