import {List} from "../../../list";
import {DoublyLinkedNode} from "./DoublyLinkedNode";

export class DoublyLinkedList<Type> implements List<Type> {
    private root:DoublyLinkedNode<Type>;

    size(): number {
        return undefined;
    }

    isEmpty(): boolean {
        return null === this.root;
    }

    contains(object: Type): boolean {
        return undefined;
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