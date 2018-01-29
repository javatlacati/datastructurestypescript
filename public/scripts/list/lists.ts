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
import {SingleLinkedList as _SingleLinkedList} from './linkedlists/iterative/SingleLinkedList';
import {TailedSingleLinkedList as _TailedSingleLinkedList} from './linkedlists/iterative/TailedSingleLinkedList';
import {Node as _Node} from './linkedlists/iterative/Node';

/**Works as a package in Java.*/
export namespace lists.linkedlists.singlelinkedlists.iterative{
    export let SingleLinkedList = _SingleLinkedList;
    export let TailedSingleLinkedList = _TailedSingleLinkedList;
    export let Node = _Node;
}

export namespace lists{
    export type List<Item> = _List<Item>;
}
