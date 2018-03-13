export class DoublyLinkedNode<Type> {

    private item: Object;
    private previous: DoublyLinkedNode<Type>;
    private next: DoublyLinkedNode<Type>;

    constructor(item: Object) {
        this.item = item;
    }
}