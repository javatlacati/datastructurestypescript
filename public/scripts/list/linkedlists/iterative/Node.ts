export class Node<Type> {
    private _item: Type;
    private _next: Node<Type>;

    constructor(item: Type) {
        this._item = item;
    }

    get item(): Type {
        return this._item;
    }

    set item(value: Type) {
        this._item = value;
    }

    get next(): Node<Type> {
        return this._next;
    }

    set next(value: Node<Type>) {
        this._next = value;
    }

    public toString():String{
        return ` Node(${this._item}) -> ` + this._next.toString();
    }
}
