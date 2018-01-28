export interface List<Type> {
    /**
     * Gives the size of the list.
     *
     * @return number of elements
     */
    size(): number;

    /**
     * Determines if list is empty.
     *
     * @return <code>true</code> if the list is empty <code>false</code>
     * otherwise
     */
    isEmpty(): boolean;

    contains(object: Type): boolean;

    toArray(): Type[];

    /**
     * Adds and element to the list.
     *
     * @param element the element to be added
     * @return <code>true</code> if the element was added <code>false</code>
     * otherwise
     */
    add(element: Type): boolean;

    /**
     * Deletes all of the elements in the list.
     */
    clear(): void;
}