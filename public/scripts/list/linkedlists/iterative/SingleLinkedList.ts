import {List} from "../../list";
import {Node} from "./Node";

export class SingleLinkedList<Type> implements List<Type> {
    private root:Node<Type>;

    size(): number {
        let size:number = 0;
        let currentNode:Node<Type> = this.root;
        while (currentNode != null) {
            currentNode = currentNode.next;
            size++;
        }
        return size;
    }

    isEmpty(): boolean {
        return undefined;
    }

    contains(o: Type): boolean {
        if (this.root == null && o == null) {
            return false;
        } else {
            let currentNode:Node<Type> = this.root;
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
        return undefined;
    }

    add(element: Type): boolean {
        return undefined;
    }

    clear(): void {
    }

}