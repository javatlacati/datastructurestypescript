/*
 * Copyright (C) 2018 Ruslan López Carro
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {List as _List} from './list';
import {SingleLinkedList as _SingleLinkedList} from './linkedlists/iterative/singly/SingleLinkedList';
import {TailedSingleLinkedList as _TailedSingleLinkedList} from './linkedlists/iterative/singly/TailedSingleLinkedList';
import {SinglyLinkedNode as _SinglyLinkedNode} from './linkedlists/iterative/singly/SinglyLinkedNode';
import {DoublyLinkedList as _DoublyLinkedList} from "./linkedlists/iterative/doubly/DoublyLinkedList";
import {ArrayBasedList as _ArrayBasedList} from "./ArrayBasedList";

/**Works as a package in Java.*/
export namespace lists.linkedlists.singlelinkedlists.iterative{
    export let SingleLinkedList = _SingleLinkedList;
    export let TailedSingleLinkedList = _TailedSingleLinkedList;
    export let SinglyLinkedNode = _SinglyLinkedNode;
    export let DoublyLinkedList = _DoublyLinkedList;
}

export namespace lists{
    export type List<Item> = _List<Item>;
    export let ArrayBasedList = _ArrayBasedList;
}
