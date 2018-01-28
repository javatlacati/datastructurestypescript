import {SingleLinkedList as _SingleLinkedList} from './SingleLinkedList'
import {Node as _Node} from './Node'
import {List as _List} from "../../list";

export namespace iterative{
    export let SingleLinkedList = _SingleLinkedList;
    export type List<Item> = _List<Item>;
    export let Node = _Node;
}
