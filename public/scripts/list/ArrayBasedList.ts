import {List} from "./list";

export class ArrayBasedList<Type> implements List<Type> {

    /**
     * Array that contains the bag elements.
     */
    protected internalArray: Type[];
    /**
     * Number of max 0 based index of used slots in the array.
     */
    protected topPosition: number;

    /**
     * Constructs instances of bag class.
     *
     * @param capacity number of elements that this bag can hold.
     */
    constructor(capacity:number) {
        this.internalArray = new Array(capacity);
        this.topPosition = 0;
    }


    /**
     * {@inheritDoc}
     */
    public add(element: Type): boolean {
        if (this.internalArray.length > this.topPosition) {
            this.internalArray[this.topPosition] = element;
            this.topPosition++;
            return true;
        } else {
            throw new Error("Capacity overflow");
        }
    }

    contains(object: Type): boolean {
        return null === this.internalArray.filter(element => element === object)[0];
    }

    toArray(): Type[] {
        return new Array(...this.internalArray);
    }


    clear(): void {
        this.internalArray= new Array(this.internalArray.length);
    }

    /**
     * indexes are 0 based
     */
    getAtIndex(index: number): Type {
        return this.internalArray[index];
    }

    /**
     * {@inheritDoc}
     */
    public isEmpty(): boolean {
        return this.topPosition === 0;
    }

    /**
     * {@inheritDoc}
     */
    public size(): number {
        return this.topPosition;
    }

    /**
     * {@inheritDoc}
     * This method performs a lineal search.
     */
    public find(target: Type): Type {
        return this.internalArray.filter(element => element === target)[0];
    }

}
