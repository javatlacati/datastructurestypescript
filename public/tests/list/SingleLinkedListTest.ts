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

import {lists} from "../../scripts/list/lists";
import * as Chai from "chai";

let instancesToTest = [
    lists.linkedlists.singlelinkedlists.iterative.SingleLinkedList,
    lists.linkedlists.singlelinkedlists.iterative.TailedSingleLinkedList
    /*,
    lists.linkedlists.singlelinkedlists.recursive.SingleLinkedList.class,
*/
];

instancesToTest.forEach((instanceToTest) => describe('Basic tests', () => {
        let list: lists.List<String>;
        beforeEach(function () {
            list = new instanceToTest();
        });

        it('size test', () => {
            const result = list.size();
            Chai.expect(result).to.equal(0);
        });

        it('emptiness test', () => {
            Chai.expect(list.isEmpty()).to.equal(true);
        });

    })
);